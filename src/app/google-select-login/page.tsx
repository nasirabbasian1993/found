'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const GoogleIcon: React.FC = () => (
    <svg className="w-5 h-5 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.4639 12.0003C22.4639 11.1068 22.3892 10.3807 22.2579 9.68452H12.2476V14.1687H17.7562C17.5816 15.0836 17.0272 15.9082 16.1437 16.5173L16.0594 16.5937L19.5042 19.2562L19.6418 19.2688C21.7317 17.4361 22.9788 14.8087 22.4639 12.0003Z" fill="#757575"/>
        <path d="M12.2476 22.0003C15.0116 22.0003 17.3005 21.0963 18.9197 19.4971L16.1437 16.5173C15.4288 17.0094 14.3942 17.3336 12.2476 17.3336C10.0381 17.3336 8.16972 15.8624 7.42079 13.9113L7.33827 14.0044L3.71965 16.7906L3.60679 16.8288C5.2323 20.0152 8.52841 22.0003 12.2476 22.0003Z" fill="#757575"/>
        <path d="M7.42079 13.9113C7.03157 12.9964 7.03157 11.0042 7.42079 10.0894L7.33827 9.99625L3.60679 7.21008L3.54129 7.23438C2.52225 9.2588 2.00001 10.9964 2.00001 12.0003C2.00001 13.0042 2.52225 14.7417 3.54129 16.7662L7.42079 13.9113Z" fill="#757575"/>
        <path d="M12.2476 6.66699C13.5135 6.66699 14.7794 7.04024 15.6806 7.9237L18.9197 4.75782C17.3005 3.15861 15.0116 2.00033 12.2476 2.00033C8.52841 2.00033 5.2323 3.98544 3.60679 7.21008L7.42079 10.0894C8.16972 8.13833 10.0381 6.66699 12.2476 6.66699Z" fill="#757575"/>
    </svg>
);

interface AccountProps {
    name: string;
    email: string;
    iconPath: string;
}

const AccountItem: React.FC<AccountProps> = ({ name, email, iconPath }) => {
    return (
        <div className="flex items-center w-full py-3 px-0 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition duration-150">
            <div className="mr-3 flex-shrink-0">
                <Image
                    src={iconPath}
                    alt={`${name}'s profile icon`}
                    width={28} 
                    height={28}
                    className="rounded-full object-cover"
                />
            </div>
            <div className="text-left">
                <p className="text-sm text-gray-800 font-medium">{name}</p>
                <p className="text-xs text-gray-500">{email}</p>
            </div>
        </div>
    );
};

const UseAnotherAccount: React.FC<{ iconPath: string }> = ({ iconPath }) => {
    return (
        <div className="flex items-center w-full py-3 px-0 cursor-pointer hover:bg-gray-50 transition duration-150">
            <div className="mr-3 flex-shrink-0">
                <Image
                    src={iconPath}
                    alt="Use another account icon"
                    width={28}
                    height={28}
                    className="rounded-full object-cover"
                />
            </div>
            <div className="text-left">
                <p className="text-sm text-gray-800 font-medium">use another account</p>
            </div>
        </div>
    );
};

export default function GoogleSelectLoginPage() {
    
    const logoPath = '/logo.png';
    const secondaryColor = '#8D7DD2';
    const nasimAccount: AccountProps = {
        name: 'nasim shahbazi',
        email: 'nasim.rvi.design@gmail.com',
        iconPath: '/nasim-profil.png', 
    };
    const genericProfileIconPath = '/profile-icon.png'; 
    const arrowIconPath = '/arrow.png'; 

    return (
        <div className="min-h-screen bg-white flex flex-col justify-start items-center p-0">
            
            <div className="absolute top-20 left-4 sm:top-32 sm:left-6 z-50"> 
                <Link href="/login" className="text-gray-500 hover:text-gray-700 transition">
                    <Image
                        src={arrowIconPath}
                        alt="Back arrow"
                        width={24}
                        height={24}
                        className="object-contain"
                    />
                </Link>
            </div>

            <div className="flex flex-col items-center justify-start w-full min-h-screen pt-4 sm:pt-20">

                <div className="w-full max-w-sm sm:max-w-md mt-10 sm:mt-0 px-4 sm:px-0">
                    <div className="flex items-center text-sm text-gray-600 font-medium whitespace-nowrap overflow-hidden">
                        <GoogleIcon />
                        Sign in with Google
                    </div>
                </div>

                <main className="w-full max-w-sm sm:max-w-md bg-white p-6 sm:p-10 mx-auto flex flex-col items-center 
                                border border-gray-200 sm:rounded-xl"> 
                    
                   
                    <div className="mb-6 sm:mb-8">
                        <Image
                            src={logoPath}
                            alt="3F Logo"
                            width={60} 
                            height={60}
                            priority
                        />
                    </div>

                    
                    <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center mb-8">
                        Choose an account
                        <br />
                        to continue with Google
                    </h1>

                    
                    <div className="w-full text-center">
                        <AccountItem
                            name={nasimAccount.name}
                            email={nasimAccount.email}
                            iconPath={nasimAccount.iconPath}
                        />
                        <UseAnotherAccount
                            iconPath={genericProfileIconPath}
                        />
                    </div>

                    
                    <div className="w-full text-center mt-10 sm:hidden">
                        <p className="text-xs text-gray-400 font-light">
                            <Link href="/privacy" className="hover:underline" style={{ color: secondaryColor }}>
                                Privacy Policy
                            </Link>
                            <span className="mx-1">&</span> 
                            <Link href="/terms" className="hover:underline" style={{ color: secondaryColor }}>
                                Terms of Service
                            </Link>
                        </p>
                    </div>

                </main>

                
                <footer className="hidden sm:block mt-6 mb-4 w-full max-w-lg text-center">
                    <p className="text-xs text-gray-400 font-light whitespace-nowrap">
                        This site is protected by reCAPTCHA and the Google 
                        <Link href="/privacy" className="hover:underline mx-1" style={{ color: secondaryColor }}>
                            Privacy Policy
                        </Link> 
                        and 
                        <Link href="/terms" className="hover:underline ml-1" style={{ color: secondaryColor }}>
                            Terms of Service
                        </Link> 
                        apply.
                    </p>
                </footer>
            </div>
        </div>
    );
}

GoogleSelectLoginPage.skipLayout = true;