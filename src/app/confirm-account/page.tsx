'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

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

const mockUser = {
    name: 'nasim shahbazi',
    email: 'nasim.rv.design@gmail.com'
};

export default function GoogleAccountConfirmPage() {
    
    return (
        <div className="min-h-screen bg-white flex flex-col">
            
            <header className="bg-white sticky top-0 z-20 h-0"> 
            </header>
            
            <main className="flex-grow flex items-center justify-center p-6 sm:p-8">
                <div className="w-full max-w-sm sm:max-w-lg mx-auto"> 
                    
                    <div className="flex items-center px-2 sm:px-0 mb-4 sm:mb-6 justify-center sm:justify-start">
                        <GoogleIcon className="w-5 h-5 mr-2 sm:mr-3" />
                        <h2 className="text-base font-normal text-gray-800">
                            Sign up with Google
                        </h2>
                    </div>

                    <div className="bg-white rounded-2xl border border-gray-200 w-full shadow-none mx-auto overflow-hidden">
                        
                        <div className="px-6 sm:px-10 flex flex-col items-center pt-8">
                            
                            <div className="flex justify-center mb-6">
                                <Image 
                                    src="/logo.png" 
                                    alt="3F Logo"
                                    width={60} 
                                    height={60} 
                                    className="object-contain" 
                                />
                            </div>

                            <div className="mb-8 text-center">
                                <h1 className="text-xl font-medium text-[#575757] mb-2">
                                    Continue with Google
                                </h1>
                            </div>

                            <div className="w-full max-w-xs space-y-0 mb-2 bg-white border border-gray-200 rounded-lg py-3 px-4">
                                <div className="text-left">
                                    <p className="text-sm font-medium text-gray-500">
                                        {mockUser.name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {mockUser.email}
                                    </p>
                                </div>
                            </div>
                            
                            <div className="w-full max-w-xs mb-8 text-left">
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    By continuing, Google will share your name, email address, language preference, and profile picture with 3F.
                                </p>
                            </div>

                            <div className="w-full max-w-xs flex justify-between space-x-3 mb-4 sm:mb-6">
                                <Link 
                                    href="../google-select" 
                                    className="flex-1 py-2 px-4 bg-[#EDE9FE] border border-[#AA99EC] text-[#6259a3] rounded-lg text-sm text-center font-medium hover:bg-gray-50 transition"
                                >
                                    Cancel
                                </Link>
                                <Link
                                    href="/LinkSentConfirmation"
                                    className="flex-1 py-2 px-4 text-white rounded-lg text-sm text-center font-medium bg-[#644FC1] hover:bg-opacity-90 transition shadow-sm"
                                >
                                    Continue
                                </Link>
                            </div>

                        </div>
                        
                        <div className="text-center py-2 px-3 sm:px-4"> 
                            
                            <p className="hidden sm:block text-[10px] text-gray-300 font-light whitespace-nowrap overflow-hidden">
                                This site is protected by reCAPTCHA and the Google 
                                <Link href="/privacy" className="text-[#644FC1] hover:text-[#270F94] underline mx-1">
                                    Privacy Policy
                                </Link> 
                                and 
                                <Link href="/terms" className="text-[#644FC1] hover:text-[#270F94] underline ml-1">
                                    Terms of Service
                                </Link> 
                                apply.
                            </p>

                            <p className="sm:hidden text-xs text-gray-400">
                                <Link href="/privacy" className="text-[#5C4FC1] hover:text-[#270F94] underline">
                                    Privacy Policy
                                </Link>
                                <span className="mx-1">&</span> 
                                <Link href="/terms" className="text-[#5C4FC1] hover:text-[#270F94] underline">
                                    Terms of Service
                                </Link>
                            </p>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}

GoogleAccountConfirmPage.skipFooter = true;