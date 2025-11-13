'use client';

import React from 'react';
import Image from 'next/image';

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
        className="text-[#5C4FC1] hover:text-[#270F94] transition"
    >
        <path d="M19 12H5"/>
        <path d="M12 19L5 12L12 5"/>
    </svg>
);

interface IconProps {
    className?: string;
}

const GoogleIcon: React.FC<IconProps> = ({ className = 'w-5 h-5 mr-3' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.4639 12.0003C22.4639 11.1068 22.3892 10.3807 22.2579 9.68452H12.2476V14.1687H17.7562C17.5816 15.0836 17.0272 15.9082 16.1437 16.5173L16.0594 16.5937L19.5042 19.2562L19.6418 19.2688C21.7317 17.4361 22.9788 14.8087 22.4639 12.0003Z" fill="#9E9E9E"/>
        <path d="M12.2476 22.0003C15.0116 22.0003 17.3005 21.0963 18.9197 19.4971L16.1437 16.5173C15.4288 17.0094 14.3942 17.3336 12.2476 17.3336C10.0381 17.3336 8.16972 15.8624 7.42079 13.9113L7.33827 14.0044L3.71965 16.7906L3.60679 16.8288C5.2323 20.0152 8.52841 22.0003 12.2476 22.0003Z" fill="#9E9E9E"/>
        <path d="M7.42079 13.9113C7.03157 12.9964 7.03157 11.0042 7.42079 10.0894L7.33827 9.99625L3.60679 7.21008L3.54129 7.23438C2.52225 9.2588 2.00001 10.9964 2.00001 12.0003C2.00001 13.0042 2.52225 14.7417 3.54129 16.7662L7.42079 13.9113Z" fill="#9E9E9E"/>
        <path d="M12.2476 6.66699C13.5135 6.66699 14.7794 7.04024 15.6806 7.9237L18.9197 4.75782C17.3005 3.15861 15.0116 2.00033 12.2476 2.00033C8.52841 2.00033 5.2323 3.98544 3.60679 7.21008L7.42079 10.0894C8.16972 8.13833 10.0381 6.66699 12.2476 6.66699Z" fill="#9E9E9E"/>
    </svg>
);

const SimpleUserIcon: React.FC<IconProps> = ({ className = 'w-5 h-5 mr-3' }) => (
    <svg 
        className={className} 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="12" cy="12" r="12" fill="#6B7280" /> 
        
        <g fill="#FFFFFF">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
            <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </g>
    </svg>
);


interface GoogleAccount {
    name: string;
    email: string;
}

const mockAccounts: GoogleAccount[] = [
    { name: 'nasim shahbazi', email: 'nasim.rv.design@gmail.com' },
];

export default function GoogleAccountSelectPage() {
    
    const handleUseAnotherAccount = () => {
        console.log("Use another account clicked.");
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            
            <header className="bg-white sticky top-0 z-20"> 
                <div className="max-w-7xl mx-auto h-16 flex items-center justify-start px-6 sm:px-8"> 
                    
                    <a href="../" className="p-1 -ml-1" aria-label="Go back to previous page">
                        <CustomBackArrow /> 
                    </a>
                </div>
            </header>
            
            <main className="flex-grow flex items-center justify-center p-6 sm:p-8">
                <div className="w-full max-w-sm sm:max-w-xl mx-auto"> 
                    
                    <div className="bg-white rounded-2xl border border-gray-200 w-full shadow-none mx-auto overflow-hidden">
                        
                        <div className="border-b border-gray-100 mb-10 pt-4 pb-4">
                            <div className="flex items-center px-6 sm:px-10">
                                <GoogleIcon />
                                <h2 className="text-base font-normal text-gray-800">
                                    Sign up with Google
                                </h2>
                            </div>
                        </div>

                        <div className="px-6 sm:px-10 flex flex-col items-center">
                            
                            <div className="flex justify-center mb-6">
                                <Image 
                                    src="/logo.png" 
                                    alt="3F Logo"
                                    width={60}
                                    height={60}
                                    className="object-contain" 
                                />
                            </div>

                            <div className="mb-10 text-center">
                                <h1 className="text-xl font-medium text-[#5C4FC1] mb-2">
                                    Choose an account
                                </h1>
                                <p className="text-gray-500 text-sm">
                                    to continue with Google
                                </p>
                            </div>

                            <div className="w-full max-w-xs space-y-0 mb-8">
                                
                                {mockAccounts.map((account) => (
                                    <div key={account.email} className="w-full">
                                        <a
                                            href="http://localhost:3000/confirm-account" 
                                            className="w-full text-left py-3 block hover:bg-gray-50 rounded-lg transition pl-11" 
                                        >
                                            <div className="text-left">
                                                
                                                <p className="text-sm font-medium text-gray-500"> 
                                                    {account.name}
                                                </p>
                                                <p className="text-xs text-gray-400"> 
                                                    {account.email}
                                                </p>
                                            </div>
                                        </a>
                                        
                                        <div className="w-full h-px bg-gray-100"></div>
                                    </div>
                                ))}

                                <div className="w-full mt-0">
                                    <button
                                        onClick={handleUseAnotherAccount}
                                        className="w-full flex items-center justify-start py-3 px-2 text-sm text-gray-600 hover:text-[#5C4FC1] transition hover:bg-gray-50 rounded-lg"
                                    >
                                        <SimpleUserIcon className="w-5 h-5 mr-3 text-[#5C4FC1]" />
                                        use another account
                                    </button>
                                    <div className="w-full h-px bg-gray-200 mt-2"></div>
                                </div>
                            </div>

                        </div>
                        
                        <div className="text-center pt-2 pb-4 px-4 sm:px-6"> 
                            
                            <p className="hidden sm:block text-xs text-gray-400 whitespace-nowrap overflow-x-auto">
                                This site is protected by reCAPTCHA and the Google 
                                <a href="/privacy" className="text-[#5C4FC1] hover:text-[#270F94] underline ml-1 mr-1">
                                    Privacy Policy
                                </a> 
                                and 
                                <a href="/terms" className="text-[#5C4FC1] hover:text-[#270F94] underline ml-1">
                                    Terms of Service
                                </a> 
                                apply.
                            </p>

                            <p className="sm:hidden text-xs text-gray-400 whitespace-nowrap">
                                <a href="/privacy" className="text-[#5C4FC1] hover:text-[#270F94] underline">
                                    Privacy Policy
                                </a>
                                <span className="mx-1">&</span> 
                                <a href="/terms" className="text-[#5C4FC1] hover:text-[#270F94] underline">
                                    Terms of Service
                                </a>
                            </p>

                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}

GoogleAccountSelectPage.skipFooter = true;