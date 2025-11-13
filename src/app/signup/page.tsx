'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, User } from 'lucide-react'; 
import React, { useState } from 'react';

const CustomBackArrow = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="28"
        height="28" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="text-[#5C4FC1]"
    >
        <path d="M19 12H5"/>
        <path d="M12 19L5 12L12 5"/>
    </svg>
);


const SignupHeader = () => {
    return (
        <header className="bg-white sticky top-0 z-20">
            <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6 sm:px-8">
                
                <Link 
                    href="/signup" 
                    className="hidden sm:flex items-center text-[#5C4FC1] transition hover:text-[#270F94]"
                >
                    <CustomBackArrow /> 
                </Link>
                <div className="sm:hidden w-7 h-7"></div>


                <h1 className="text-2xl font-medium text-gray-900">
                    Create your personal account
                </h1>
                
                <div className="w-7 h-7"></div> 
            </div>
        </header>
    );
};


interface FormFieldProps {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    Icon: React.ElementType;
    note?: string; 
}

const FormField: React.FC<FormFieldProps> = ({ id, label, type, placeholder, value, onChange, note }) => (
    <div className="text-left">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
            {label}
        </label>
        <div className="relative">
            <input
                id={id}
                name={id}
                type={type}
                required
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-4 py-3 border border-[#5C4FC1] rounded-lg focus:ring-[#5C4FC1] focus:border-[#5C4FC1] transition placeholder-gray-400"
            />
        </div>
        {note && (
             <p className="mt-2 text-xs text-[#5C4FC1] text-left font-medium">
                {note}
            </p>
        )}
    </div>
);


export default function SignupDetailsPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ firstName, lastName, email });
        // TODO: Navigate to the Verification page
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            
            <SignupHeader />
            
            <main className="flex-grow flex items-start justify-center p-6 sm:p-8 pt-6"> 
                <div className="w-full max-w-sm mx-auto">
                    
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-medium text-[#5C4FC1] mb-8 mt-4"> 
                            FUND FOR FOUND
                        </h2>
                        <div className="flex justify-center mb-10">
                            <Image 
                                src="/logo.png" 
                                alt="3F Logo"
                                width={60} 
                                height={60} 
                                className="object-contain" 
                            />
                        </div>
                    </div>

                    <Link
                        href="http://localhost:3000/google-select"
                        className="w-full flex items-center justify-center py-3 border border-gray-300 rounded-lg mb-6 
                                   font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition shadow-sm"
                    >
                        <span className="text-base">Continue with google</span>
                    </Link>
                    

                    <div className="flex items-center my-6">
                        <div className="flex-grow border-t border-gray-200"></div>
                        <span className="flex-shrink mx-4 text-gray-400 text-sm">or</span>
                        <div className="flex-grow border-t border-gray-200"></div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        
                        <FormField 
                            id="firstName"
                            label="First name"
                            type="text"
                            placeholder=""
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            Icon={User} 
                        />

                        <FormField 
                            id="lastName"
                            label="Last name"
                            type="text"
                            placeholder=""
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            Icon={User} 
                        />

                        <FormField 
                            id="email"
                            label="Email address"
                            type="email"
                            placeholder="e.g. yourname@yahoo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            Icon={Mail}
                            note="We will send you 6 digit code to your email."
                        />

                        <button
                            type="submit"
                            className="w-full py-3 px-6 text-white rounded-xl transition shadow-lg text-center font-medium mt-6
                                       bg-[#7E57C2] hover:bg-opacity-90 focus:ring-4 focus:ring-[#7E57C2] focus:ring-opacity-50 focus:outline-none"
                        >
                            Continue
                        </button>
                    </form>
                    
                </div>
            </main>
            
            <footer className="w-full py-4 text-center bg-white">
                
                <p className="text-xs text-gray-400 leading-relaxed hidden sm:block">
                    This site is protected by reCAPTCHA and the Google 
                    <Link href="/privacy" className="text-[#5C4FC1] hover:text-[#270F94] underline ml-1 mr-1">
                        Privacy Policy
                    </Link> 
                    and 
                    <Link href="/terms" className="text-[#5C4FC1] hover:text-[#270F94] underline ml-1">
                        Terms of Service
                    </Link> 
                    apply.
                </p>

                <p className="text-xs text-gray-400 leading-relaxed block sm:hidden"> 
                    <Link href="/privacy" className="text-[#5C4FC1] hover:text-[#270F94] underline">
                        Privacy Policy
                    </Link> 
                    &
                    <Link href="/terms" className="text-[#5C4FC1] hover:text-[#270F94] underline">
                        Terms of Service
                    </Link> 
                </p>
                
            </footer>
        </div>
    );
}

