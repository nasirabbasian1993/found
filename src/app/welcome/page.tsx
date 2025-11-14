'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const MAIN_TITLE = 'Welcome to 3F';
const SUBTEXT = 'Your journey begins here.\nReady to start?';

export default function WelcomePage() {
    
    const illustrationPath = '/welcome.png'; 

    return (
        <div className="min-h-screen bg-white flex flex-col justify-center items-center p-6 text-center">
            
            <div className="w-full max-w-lg mx-auto">
                
                <h1 className="text-3xl sm:text-4xl font-semibold text-[#644FC1] mb-10">
                    {MAIN_TITLE}
                </h1>
                
                <div className="flex justify-center mb-10">
                    <Image
                        src={illustrationPath}
                        alt="Welcome illustration"
                        width={400} 
                        height={400} 
                        className="object-contain"
                    />
                </div>

                <div className="mb-10 whitespace-pre-line"> 
                    <p className="text-xl text-gray-700 font-normal">
                        {SUBTEXT.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                {index === 0 && <br />}
                            </React.Fragment>
                        ))}
                    </p>
                </div>

                <div className="flex justify-center space-x-4">
                    
                    <Link
                        href="/" 
                        className="py-2.5 px-6 bg-[#644FC1] text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition shadow-sm"
                    >
                        Go homepage
                    </Link>
                    
                    <Link
                        href="/start-project" 
                        className="py-2.5 px-6 border border-[#644FC1] text-[#644FC1] rounded-lg text-sm font-medium hover:bg-[#F2F0FF] transition"
                    >
                        Start project
                    </Link>

                </div>

            </div>
        </div>
    );
}

WelcomePage.skipLayout = true;