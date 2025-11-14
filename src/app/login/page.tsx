'use client';

// Imports for Next.js components restored
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

const GoogleIcon: React.FC = () => (
<svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.4639 12.0003C22.4639 11.1068 22.3892 10.3807 22.2579 9.68452H12.2476V14.1687H17.7562C17.5816 15.0836 17.0272 15.9082 16.1437 16.5173L16.0594 16.5937L19.5042 19.2562L19.6418 19.2688C21.7317 17.4361 22.9788 14.8087 22.4639 12.0003Z" fill="#9E9E9E"/>
<path d="M12.2476 22.0003C15.0116 22.0003 17.3005 21.0963 18.9197 19.4971L16.1437 16.5173C15.4288 17.0094 14.3942 17.3336 12.2476 17.3336C10.0381 17.3336 8.16972 15.8624 7.42079 13.9113L7.33827 14.0044L3.71965 16.7906L3.60679 16.8288C5.2323 20.0152 8.52841 22.0003 12.2476 22.0003Z" fill="#9E9E9E"/>
<path d="M7.42079 13.9113C7.03157 12.9964 7.03157 11.0042 7.42079 10.0894L7.33827 9.99625L3.60679 7.21008L3.54129 7.23438C2.52225 9.2588 2.00001 10.9964 2.00001 12.0003C2.00001 13.0042 2.52225 14.7417 3.54129 16.7662L7.42079 13.9113Z" fill="#9E9E9E"/>
<path d="M12.2476 6.66699C13.5135 6.66699 14.7794 7.04024 15.6806 7.9237L18.9197 4.75782C17.3005 3.15861 15.0116 2.00033 12.2476 2.00033C8.52841 2.00033 5.2323 3.98544 3.60679 7.21008L7.42079 10.0894C8.16972 8.13833 10.0381 6.66699 12.2476 6.66699Z" fill="#9E9E9E"/>
</svg>
);


export default function LoginPage() {
const [showPassword, setShowPassword] = useState(false);
const logoPath = '/logo.png';
const primaryColor = '#644FC1';
const secondaryColor = '#8D7DD2';
const iconSize = 40;

return (
<div className="min-h-screen bg-white flex flex-col justify-between items-center py-6 sm:py-12 px-4 sm:px-6">
<main className="w-full max-w-sm mx-auto flex flex-col items-center">
<header className="mb-8 sm:mb-10 text-center">
<h1 className="text-2xl sm:text-3xl font-bold tracking-wider" style={{ color: primaryColor }}>
FUND FOR FOUND
</h1>
<p className="text-sm sm:text-base text-gray-500 mt-2">
Create an account or sign in to start creating
</p>
</header>

<div className="mb-8 sm:mb-12">
{/* Replaced standard <img> tag with Next.js Image component */}
<Image
  src={logoPath}
  alt="3F Logo"
  width={60}
  height={60}
  className="object-contain"
/>
</div>

<div className="w-full">
{/* Standard <a> tag used for external link */}
<a
  href="http://localhost:3000/google-select-login"
  className="flex items-center justify-center w-full py-3 px-4 mb-4 border border-gray-300 rounded-lg text-gray-700 text-sm font-medium bg-gray-50 hover:bg-gray-100 transition duration-150"
>
  <GoogleIcon />
  Continue with google
</a>

<div className="flex items-center my-4">
<div className="flex-grow border-t border-gray-300"></div>
<span className="flex-shrink mx-4 text-gray-500 text-xs font-medium">
or
</span>
<div className="flex-grow border-t border-gray-300"></div>
</div>

<div className="mb-4">
<label htmlFor="emailOrMobile" className="block text-sm font-medium text-gray-700 mb-1">
Mobile number or email address
</label>
<input
id="emailOrMobile"
type="text"
placeholder="e.g. 09120000000 or yourname@yahoo.com"
className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 text-sm focus:ring-2 focus:ring-[#644FC1] focus:border-[#644FC1] outline-none"
/>
</div>

<div className="mb-4">
<label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
Password
</label>
<input
id="password"
type={showPassword ? 'text' : 'password'}
placeholder="Password"
className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 text-sm focus:ring-2 focus:ring-[#644FC1] focus:border-[#644FC1] outline-none"
/>
<div className="mt-2 flex justify-between items-center text-left">
{/* Replaced standard <a> tag with Next.js Link component */}
<Link
href="/forgot-password"
className="text-sm font-medium hover:underline transition"
style={{ color: secondaryColor }}
>
Forget your password?
</Link>

<button
type="button"
onClick={() => setShowPassword(!showPassword)}
className="hidden sm:block text-sm leading-5 p-1"
>
{/* Replaced standard <img> tag with Next.js Image component */}
<Image
  src="/eye-icon.png"
  alt={showPassword ? "Hide password" : "Show password"}
  width={iconSize}
  height={iconSize}
  className="object-contain"
/>
</button>
</div>
</div>

<button
type="submit"
className="w-full py-3 px-4 mb-6 rounded-lg text-white text-base font-medium transition duration-150 shadow-md"
style={{ backgroundColor: primaryColor }}
>
Continue
</button>

<div className="text-center">
<p className="text-sm text-gray-500 mb-1">Do not have one?</p>
{/* Replaced standard <a> tag with Next.js Link component */}
<Link
href="/signup"
className="text-base font-medium hover:underline transition"
style={{ color: primaryColor }}
>
Create an account
</Link>
</div>
</div>

</main>

<footer className="mt-12 w-full max-w-lg text-center">
<p className="hidden sm:block text-xs text-gray-400 font-light">
This site is protected by reCAPTCHA and the Google
{/* Replaced standard <a> tag with Next.js Link component */}
<Link href="/privacy" className="hover:underline mx-1" style={{ color: secondaryColor }}>
Privacy Policy
</Link>
and
{/* Replaced standard <a> tag with Next.js Link component */}
<Link href="/terms" className="hover:underline ml-1" style={{ color: secondaryColor }}>
Terms of Service
</Link>
apply.
</p>

<p className="sm:hidden text-xs text-gray-400 font-light">
{/* Replaced standard <a> tag with Next.js Link component */}
<Link href="/privacy" className="hover:underline" style={{ color: secondaryColor }}>
Privacy Policy
</Link>
<span className="mx-1">&</span>
{/* Replaced standard <a> tag with Next.js Link component */}
<Link href="/terms" className="hover:underline" style={{ color: secondaryColor }}>
Terms of Service
</Link>
</p>
</footer>
</div>
);
}