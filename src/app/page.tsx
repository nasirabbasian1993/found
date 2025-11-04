'use client'; 
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
    const isAuthenticated = false; 
    
    const [bagSrc, setBagSrc] = useState('/bag.png'); 
    
    const handleBagError = () => {
        setBagSrc("https://placehold.co/92x72/644FC1/FFFFFF?text=Bag");
    };

    return (
        <main className="min-h-screen bg-white pt-[100px] pb-20 px-6 sm:px-8"> 
            <div className="max-w-6xl mx-auto">
                
                <h1 
                    className="text-4xl md:text-5xl leading-tight mb-6 md:px-12 text-[#270F94] text-left" 
                >
                    Create your profile and take the first step towards new opportunities
                </h1>
                
                <div className="mb-16">
                    <p 
                        className="text-left text-lg md:text-xl md:px-12 text-gray-500" 
                    >
                        By creating your account, you’ll gain access to a thriving community where brands and individuals are committed to offering you ongoing support. This support network will empower you with the resources, guidance, and connections you need to succeed, ensuring that you’re never alone on your journey.
                    </p>
                </div>


                <div 
                    className="flex flex-col md:flex-row justify-center items-center md:items-stretch space-y-6 md:space-y-0 md:space-x-8"
                >
                
                    <div 
                        className="bg-white border border-[#644FC1] rounded-xl w-full md:w-[320px] h-auto p-8 md:p-10 flex flex-col items-center shadow-sm" 
                    >
                        
                        <div className="mb-8 mt-4 md:mt-0"> 
                            <Image 
                              src={bagSrc} 
                              alt="Briefcase Icon" 
                              width={92}
                              height={72}
                              className="object-contain"
                              onError={handleBagError}
                            />
                            
                        </div>

                        <h2 
                            className="text-2xl mb-4 mt-8 md:mt-[80px] text-center text-[#644FC1]"
                        >
                            Brand or organization
                        </h2>
                        <p className="text-sm text-gray-500 mb-8 text-center w-full"> 
                            If your brand is established and you’re looking for continuous support, get started now.
                        </p>

                        <StartButton isAuthenticated={isAuthenticated} />

                        <Link
                            href="/learn-more" 
                            className="text-sm mt-3 font-medium transition text-[#8D75F7] hover:text-[#5C4FC1]"
                        >
                            learn more
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

interface StartButtonProps {
    isAuthenticated: boolean;
}

const StartButton = ({ isAuthenticated }: StartButtonProps) => { 
    const targetHref = isAuthenticated ? '/create-profile-step1' : '/login';
    
    return (
        <Link
            href={targetHref}
            className="w-full py-3 px-6 text-white rounded-lg transition shadow-lg text-center 
                       bg-[#5C4FC1] 
                       hover:bg-opacity-90
                       focus:ring-4 focus:ring-[#5C4FC1] focus:ring-opacity-50 focus:outline-none" 
        >
            Start
        </Link>
    );
}