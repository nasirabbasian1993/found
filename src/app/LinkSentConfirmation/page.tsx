'use client';

import Image from 'next/image';
import React from 'react';

const TARGET_EMAIL = 'shahbazi.n.design@gmail.com';

export default function LinkSentConfirmation() {
    
    const confirmationImagePath = '/tick.png'; 
    const goMailLink = 'mailto:' + TARGET_EMAIL;

    return (
        <div className="min-h-screen bg-white flex flex-col justify-center items-center p-6 text-center">
            
            <div className="w-full max-w-md mx-auto">
                
                <div className="flex justify-center mb-10">
                    <Image
                        src={confirmationImagePath}
                        alt="Success confirmation illustration"
                        width={250}
                        height={250}
                        className="object-contain"
                    />
                </div>

                <h1 className="text-2xl font-semibold text-[#5C4FC1] mb-6">
                    Your link is being sent. Hang tight!
                </h1>

                <div className="text-center mb-10">
                    <p className="text-gray-500 text-base mb-1">
                        We have sent the link to <span className="font-medium text-gray-800">{TARGET_EMAIL}</span>
                    </p>
                    
                    <a 
                        href={goMailLink} 
                        className="text-[#5C4FC1] hover:text-[#270F94] font-medium transition duration-200"
                    >
                        Go to your mail
                    </a>
                </div>

                <p className="text-gray-400 text-sm mt-8 px-4">
                    You will be redirected from the link in the email, you can safely close the tab.
                </p>

            </div>
        </div>
    );
}