import { Link } from 'react-router-dom';
import { Map } from 'lucide-react';

export default function SiteMap() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/info-hub', label: 'Information Hub' },
    { href: '/resources', label: 'Resource Directory' },
    { href: '/tools', label: 'Interactive Safety Tools' },
    { href: '/stories', label: 'Community Stories' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/privacy', label: 'Privacy Policy' },
  ];

  return (
    <div className='bg-white py-12 md:py-20 animate-fadeIn'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-2xl mx-auto text-center'>
          <Map className='h-16 w-16 mx-auto text-teal-600 mb-4' />
          <h1 className='text-4xl md:text-5xl font-bold text-gray-800'>Site Map</h1>
          <p className='text-lg text-gray-600 mt-4'>Navigate through Salama Shield with ease. Find all our pages listed below.</p>
        </div>

        <div className='mt-12 max-w-lg mx-auto'>
          <ul className='space-y-4'>
            {links.map((link) => (
              <li key={link.href}>
                <Link 
                  to={link.href} 
                  className='block bg-gray-50 p-6 rounded-lg shadow-sm hover:bg-teal-50 hover:shadow-md transition-all duration-300 text-xl font-semibold text-gray-700 hover:text-teal-700'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}