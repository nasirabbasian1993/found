'use client'; 

import { Search, Menu, X } from 'lucide-react';
import React, { useState, MouseEventHandler } from 'react'; 
import Image from 'next/image';
import Link from 'next/link';


interface UserMetadata {
    avatar_url: string;
}

interface User {
    user_metadata: UserMetadata;
}


interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  
  onClick?: MouseEventHandler<HTMLAnchorElement>; 
}


const NavLink: React.FC<NavLinkProps> = ({ href, children, className, onClick }) => ( 
  <Link href={href} className={className} onClick={onClick}> 
    {children}
  </Link>
);


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const user: User | null = null; 

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Explore', href: '/explore' },
    { name: 'About us', href: '/about' },
    { name: 'Help & Support', href: '/support' },
  ];
  
  
  return (
    <header className="bg-white relative z-50" dir="ltr"> 
      
      <div className="max-w-7xl mx-auto h-20 flex items-center px-6 sm:px-8 lg:px-12">
        
        <NavLink href="/" className="flex-shrink-0">
          <Image 
            src="/logo.png" 
            alt="3F Logo"
            width={47}
            height={27} 
            className="w-8 object-contain" 
          />
        </NavLink>
        
        <nav className="hidden md:flex text-gray-700 ml-96 whitespace-nowrap">
          {navLinks.map((link, index) => (
            <NavLink 
              key={link.name}
              href={link.href} 
              className={`hover:text-indigo-600 font-medium transition text-base ${index > 0 ? 'ml-6' : ''}`}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        
        <div className="flex-grow"></div>

        <div className="flex items-center space-x-3 sm:space-x-5 flex-shrink-0">
          
          <div className="relative hidden lg:block">
            <input 
              type="text" 
              placeholder="Search brand, category, tag or..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm w-64 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition duration-150"
              style={{
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
                backgroundColor: 'white' 
              }}
            />
            
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <Search className="w-5 h-5" />
            </div>
          </div>
          
          <div className="block lg:hidden">
              <Search className="w-6 h-6 text-gray-500 cursor-pointer hover:text-indigo-600" />
          </div>


          {user ? (
            
            <NavLink 
              href="/profile" 
              className="relative w-11 h-11 flex items-center justify-center rounded-full overflow-hidden p-0.5 bg-[#DDDFFF]"
              onClick={() => setIsMenuOpen(false)}
            >
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
                    <Image 
                      src={(user as User).user_metadata.avatar_url || "https://placehold.co/44x44/dcdaff/5946D6?text=AD"} 
                      alt="User Avatar" 
                      width={44}  
                      height={44} 
                      className="object-cover w-full h-full rounded-full" 
                    />
                </div>
            </NavLink>
          ) : (
            <NavLink 
              href="/login" 
              className="px-5 py-2 text-sm font-semibold text-indigo-700 bg-white border border-indigo-200 rounded-full hover:bg-indigo-50 transition shadow-sm hidden lg:block" 
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </NavLink>
          )}

          <button 
            className="md:hidden text-gray-500 hover:text-indigo-600 p-2 rounded-full transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      <div className={`
        md:hidden 
        absolute w-full bg-white shadow-lg border-t border-gray-100 
        transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'opacity-100 max-h-screen py-4' : 'opacity-0 max-h-0 overflow-hidden'}
      `}>
        <nav className="flex flex-col space-y-2 px-6">
            {navLinks.map((link) => (
                <NavLink 
                    key={link.name}
                    href={link.href} 
                    className="text-gray-700 hover:text-indigo-600 font-medium py-2 border-b border-gray-50 last:border-b-0"
                    onClick={() => setIsMenuOpen(false)} 
                >
                    {link.name}
                </NavLink>
            ))}
            {!user && (
                <NavLink 
                    href="/login" 
                    className="px-5 py-2 text-sm font-semibold text-indigo-700 bg-white border border-indigo-200 rounded-full hover:bg-indigo-50 transition shadow-sm text-center block mt-2" 
                    onClick={() => setIsMenuOpen(false)}
                >
                    Sign In
                </NavLink>
            )}
        </nav>
      </div>

      <div 
        className="absolute bottom-0 w-full h-px" 
        style={{ backgroundColor: '#DCDAFF' }} 
      ></div>
    </header>
  );
};

export default Header;