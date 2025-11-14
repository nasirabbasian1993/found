'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useCallback } from 'react';

// === LinkSentModal Component ===
interface LinkSentModalProps {
    isOpen: boolean;
    onClose: () => void;
    destination: string; 
    continuePath: string;
}

const primaryColor: string = '#644FC1'; 

const LinkSentModal: React.FC<LinkSentModalProps> = ({ 
    isOpen, 
    onClose, 
    destination,
    continuePath 
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center pt-20 bg-gray-200">
            
            {/* Lock Icon - Changed to text-purple-200 and opacity-60 for a faded look */}
            <div className="mb-4 text-purple-200 opacity-60"> 
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
            </div>

            <div className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl max-w-xs w-full text-center">
                
                <div className="flex justify-center mb-6">
                    <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>

                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    Login code text message sent
                </h2>

                <p className="text-sm text-gray-600 mb-8">
                    we have sent a login code to **{destination}** to get back into your account.
                </p>

                <Link 
                    href={continuePath}
                    onClick={onClose} 
                    className="w-full py-3 px-4 rounded-lg text-white text-base font-medium transition duration-200 shadow-md flex justify-center items-center hover:opacity-90"
                    style={{ backgroundColor: primaryColor }}
                >
                    ok, continue
                </Link>
            </div>
            
            <div className="mt-8 text-center space-y-3">
                <Link 
                    href="/signup" 
                    className="text-sm font-medium hover:underline transition block text-gray-600"
                >
                    Create an account
                </Link>
                
                <Link 
                    href="/login" 
                    className="text-sm font-light hover:underline transition block text-gray-600"
                >
                    back to login
                </Link>
            </div>

        </div>
    );
};
// === End LinkSentModal Component ===


export default function SendLinkPage() {
    
    // Custom Configuration
    const primaryColor: string = '#644FC1'; 
    const lightPurple: string = '#E0E0FF'; 
    const lockIconPath: string = '/lock.png'; 
    const continueLink: string = '/LinkSentConfirmation';

    // State Management
    const [inputValue, setInputValue] = useState<string>('');
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState<boolean>(false); 
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    
    // Validation Logic
    const validateInput = useCallback((value: string): boolean => {
        return value.trim().length >= 5;
    }, []);

    const isValid: boolean = validateInput(inputValue);
    const isButtonDisabled: boolean = !isValid; 
    const isInvalid: boolean = hasAttemptedSubmit && !isValid; 
    
    // Submission Handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setHasAttemptedSubmit(true); 

        if (isValid) {
            setIsModalOpen(true);
        }
    };

    // UI Handlers
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        if (hasAttemptedSubmit) {
            setHasAttemptedSubmit(false);
        }
    };
    
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => {
        setIsFocused(false);
        if (hasAttemptedSubmit) {
            validateInput(inputValue);
        }
    };
    
    const closeModal = () => setIsModalOpen(false);

    // Styling Logic (Tailwind & Inline Styles)
    const buttonBaseClasses: string = 'w-full py-3 px-4 mt-6 rounded-lg text-base font-medium transition duration-200 shadow-sm flex justify-center items-center';
    
    const enabledButtonStyles = {
        backgroundColor: primaryColor,
        color: 'white',
    };
    const disabledButtonClasses: string = `text-gray-500 cursor-not-allowed opacity-80`;

    const inputBorderClasses: string = isInvalid 
        ? 'border-red-500 ring-2 ring-red-500' 
        : isFocused 
        ? 'ring-2' 
        : 'border-gray-300';
    
    const inputFocusedStyles = isFocused ? { borderColor: primaryColor, outlineColor: primaryColor, boxShadow: `0 0 0 2px ${primaryColor}` } : {};


    return (
        <div className="min-h-screen bg-white flex flex-col justify-center items-center py-8 px-4 sm:px-6">
            
            <main className="w-full max-w-sm mx-auto flex flex-col items-center p-0 sm:p-8">
                
                <div className="mb-6 sm:mb-8 flex justify-center">
                    <Image
                        src={lockIconPath}
                        alt="Lock Icon"
                        width={60} 
                        height={60}
                        priority
                        className="object-contain"
                    />
                </div>

                <header className="mb-6 text-center">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800" style={{ color: primaryColor }}>
                        Trouble with logging in?
                    </h1>
                </header>

                <p className="text-center text-sm sm:text-base text-gray-700 mb-8 sm:mb-10 px-2 sm:px-0">
                    Enter your email address or phone number and we will send you a link to get back into your account.
                </p>

                <form onSubmit={handleSubmit} className="w-full">
                    
                    <label htmlFor="emailOrMobile" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                        Mobile number or email address
                    </label>
                    
                    <input
                        id="emailOrMobile"
                        type="text"
                        placeholder="e.g. 09120000000 or yourname@yahoo.com"
                        className={`w-full px-4 py-3 border rounded-lg text-gray-700 placeholder-gray-400 text-sm outline-none transition duration-150 ${inputBorderClasses}`}
                        style={{
                            ...inputFocusedStyles,
                            borderColor: isInvalid ? '#EF4444' : isFocused ? primaryColor : '#D1D5DB',
                        }}
                        value={inputValue}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />

                    {isInvalid && (
                        <p className="text-red-500 text-xs mt-2 text-left">
                            Please enter at least 5 characters for your email or mobile number.
                        </p>
                    )}

                    <button
                        type="submit"
                        className={`${buttonBaseClasses} ${isButtonDisabled ? disabledButtonClasses : 'hover:opacity-90'}`}
                        style={isButtonDisabled ? { backgroundColor: lightPurple } : enabledButtonStyles}
                        disabled={isButtonDisabled}
                    >
                        Continue
                    </button>

                    <div className="flex items-center my-6">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="flex-shrink mx-4 text-gray-500 text-xs font-medium">
                            or
                        </span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                </form>

                <div className="w-full text-center">
                    <Link 
                        href="/signup" 
                        className="text-base font-medium hover:underline transition mb-2 block"
                        style={{ color: primaryColor }}
                    >
                        Create an account
                    </Link>
                    
                    <Link 
                        href="/login" 
                        className="text-sm font-light hover:underline transition block mt-3 text-gray-500"
                    >
                        Back to login
                    </Link>
                </div>

            </main>

            <LinkSentModal 
                isOpen={isModalOpen}
                onClose={closeModal}
                destination={inputValue}
                continuePath={continueLink}
            />
            
        </div>
    );
}