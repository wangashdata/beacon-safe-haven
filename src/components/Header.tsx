import { Link, NavLink } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/info-hub', label: 'Information Hub' },
    { href: '/resources', label: 'Resources' },
    { href: '/stories', label: 'Stories' },
    { href: '/tools', label: 'Safety Tools' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className='bg-white shadow-md fixed w-full top-0 z-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          <Link to='/' className='flex items-center space-x-2' aria-label='Salama Shield Home'>
            <Shield className='h-8 w-8 text-teal-600' />
            <span className='text-2xl font-bold text-gray-800'>Salama Shield</span>
          </Link>
          <nav className='hidden md:flex items-center space-x-6'>
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-300 ${isActive ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600 hover:text-teal-500'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className='md:hidden flex items-center'>
            <button onClick={() => setIsOpen(!isOpen)} aria-label='Open navigation menu'>
              {isOpen ? <X className='h-8 w-8 text-gray-800' /> : <Menu className='h-8 w-8 text-gray-800' />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden bg-white border-t border-gray-200'>
          <nav className='flex flex-col items-center space-y-4 py-4'>
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium ${isActive ? 'text-teal-600' : 'text-gray-600'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}