import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-gray-100 text-gray-600 py-12'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='space-y-4'>
            <Link to='/' className='flex items-center space-x-2' aria-label='Salama Shield Home'>
              <Shield className='h-8 w-8 text-teal-600' />
              <span className='text-2xl font-bold text-gray-800'>Salama Shield</span>
            </Link>
            <p className='text-base'>Your safe space for information, resources, and support.</p>
          </div>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-gray-800'>Quick Links</h3>
            <ul className='space-y-2'>
              <li><Link to='/info-hub' className='hover:text-teal-500'>Information Hub</Link></li>
              <li><Link to='/resources' className='hover:text-teal-500'>Resource Directory</Link></li>
              <li><Link to='/stories' className='hover:text-teal-500'>Survivor Stories</Link></li>
            </ul>
          </div>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-gray-800'>Legal</h3>
            <ul className='space-y-2'>
              <li><Link to='/privacy' className='hover:text-teal-500'>Privacy Policy</Link></li>
              <li><Link to='/sitemap' className='hover:text-teal-500'>Site Map</Link></li>
              <li><Link to='/contact' className='hover:text-teal-500'>Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className='mt-8 border-t border-gray-200 pt-8 text-center text-sm'>
          <p>&copy; 2025 Salama Shield. All rights reserved.</p>
          <p className='mt-2'>This website is for informational purposes only and does not constitute legal or medical advice.</p>
        </div>
      </div>
    </footer>
  );
}