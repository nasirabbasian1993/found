// import Link from 'next/link';
// import { 
//   FaTwitter, 
//   FaGithub, 
//   FaDiscord, 
//   FaLinkedin, 
//   FaEnvelope, 
//   FaChevronDown 
// } from 'react-icons/fa';
// import { IoLanguage } from 'react-icons/io5'; 

// const Footer = () => {
//   const socialLinks = [
//     { href: 'https://twitter.com', icon: FaTwitter },
//     { href: 'https://github.com', icon: FaGithub },
//     { href: 'https://discord.com', icon: FaDiscord },
//     { href: 'https://linkedin.com', icon: FaLinkedin },
//     { href: 'mailto:email@example.com', icon: FaEnvelope },
//   ];
  
//   return (
//     <footer className="bg-gray-50 relative"> 
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
//         <div className="grid grid-cols-3 gap-8 pb-10">
          
//           <div>
//             <h4 className="text-gray-900 mb-3 font-semibold text-base">ABOUT</h4> 
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li><Link href="/about" className="text-indigo-600 hover:text-indigo-700">About us</Link></li>
//               <li><Link href="/contact" className="hover:text-indigo-600">Contact us</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-gray-900 mb-3 font-semibold text-base">RESOURCES</h4>
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li><Link href="/blog" className="hover:text-indigo-600">Blog</Link></li>
//               <li><Link href="/how-it-works" className="hover:text-indigo-600">How 3F works?</Link></li>
//               <li><Link href="/help" className="hover:text-indigo-600">Help & support</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-gray-900 mb-3 font-semibold text-base">CONTRIBUTING</h4>
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li><Link href="/brand" className="hover:text-indigo-600">Brand & Organizations</Link></li>
//               <li><Link href="/pricing" className="hover:text-indigo-600">Pricing</Link></li>
//             </ul>
//           </div>
//         </div>

//         <div className="flex justify-between items-center py-6">
          
//           <div className="flex items-center text-sm text-gray-600">
//             <div className="flex items-center space-x-1 py-2 px-3 border border-gray-300 rounded-lg cursor-pointer transition bg-white hover:bg-gray-100 shadow-sm">
//               <IoLanguage className="w-5 h-5 text-gray-600" /> 
//               <span className="text-sm font-medium">English (100%)</span>
//               <FaChevronDown className="w-3 h-3 text-gray-500 ml-1" /> 
//             </div>
//           </div>


//           <div className="flex space-x-4 text-gray-500"> 
//             {socialLinks.map((item, index) => (
//               <a 
//                 key={index} 
//                 href={item.href} 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="hover:text-gray-900 transition duration-150 ease-in-out"
//               >
//                 <item.icon className="w-5 h-5" /> 
//               </a>
//             ))}
//           </div>
//         </div>

//       </div>
      
//       <div className="border-t border-gray-200 bg-gray-50 py-4">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-500"> 
//               <Link href="/trust" className="hover:text-gray-900">Trust & safety</Link>
//               <Link href="/terms" className="hover:text-gray-900">Terms of use</Link>
//               <Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
//             </div>
//         </div>
//       </div>
      
//     </footer>
//   );
// };

// export default Footer;

import Link from 'next/link';
import { 
  FaTwitter, 
  FaGithub, 
  FaDiscord, 
  FaLinkedin, 
  FaEnvelope, 
  FaChevronDown 
} from 'react-icons/fa';
import { IoLanguage } from 'react-icons/io5'; 

const Footer = ({ shouldRender = true }) => {
  
  if (!shouldRender) {
    return null; 
  }

  const socialLinks = [
    { href: 'https://twitter.com', icon: FaTwitter },
    { href: 'https://github.com', icon: FaGithub },
    { href: 'https://discord.com', icon: FaDiscord },
    { href: 'https://linkedin.com', icon: FaLinkedin },
    { href: 'mailto:email@example.com', icon: FaEnvelope },
  ];
  
  return (
    <footer className="bg-gray-50 relative"> 
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        <div className="grid grid-cols-3 gap-8 pb-10">
          
          <div>
            <h4 className="text-gray-900 mb-3 font-semibold text-base">ABOUT</h4> 
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/about" className="text-indigo-600 hover:text-indigo-700">About us</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-600">Contact us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 mb-3 font-semibold text-base">RESOURCES</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/blog" className="hover:text-indigo-600">Blog</Link></li>
              <li><Link href="/how-it-works" className="hover:text-indigo-600">How 3F works?</Link></li>
              <li><Link href="/help" className="hover:text-indigo-600">Help & support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 mb-3 font-semibold text-base">CONTRIBUTING</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/brand" className="hover:text-indigo-600">Brand & Organizations</Link></li>
              <li><Link href="/pricing" className="hover:text-indigo-600">Pricing</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center py-6">
          
          <div className="flex items-center text-sm text-gray-600">
            <div className="flex items-center space-x-1 py-2 px-3 border border-gray-300 rounded-lg cursor-pointer transition bg-white hover:bg-gray-100 shadow-sm">
              <IoLanguage className="w-5 h-5 text-gray-600" /> 
              <span className="text-sm font-medium">English (100%)</span>
              <FaChevronDown className="w-3 h-3 text-gray-500 ml-1" /> 
            </div>
          </div>


          <div className="flex space-x-4 text-gray-500"> 
            {socialLinks.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-gray-900 transition duration-150 ease-in-out"
              >
                <item.icon className="w-5 h-5" /> 
              </a>
            ))}
          </div>
        </div>

      </div>
      
      <div className="border-t border-gray-200 bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-500"> 
              <Link href="/trust" className="hover:text-gray-900">Trust & safety</Link>
              <Link href="/terms" className="hover:text-gray-900">Terms of use</Link>
              <Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
            </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;