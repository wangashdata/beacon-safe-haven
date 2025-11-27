import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';

export default function Home() {
  const heroImageUrl = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/2d862e5f-6c67-4bae-8888-40fe0294de8e/hero-banner-f6vlhfj-1764273125767.webp';

  return (
    <div className='animate-fadeIn'>
      {/* Hero Section */}
      <section 
        className='relative bg-cover bg-center h-[60vh] md:h-[70vh] text-white flex items-center'
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <div className='relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10'>
          <h1 className='text-4xl md:text-6xl font-bold leading-tight mb-4'>A Safe Space for Support & Empowerment</h1>
          <p className='text-lg md:text-2xl mb-8 max-w-3xl mx-auto'>You are not alone. Find resources, information, and a community that understands and supports you.</p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Link to='/resources' className='bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 flex items-center gap-2'>
              <ShieldCheck className='h-6 w-6' />
              <span>Find Resources</span>
            </Link>
            <a href='tel:911' className='bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 flex items-center gap-2'>
              <Phone className='h-6 w-6' />
              <span>Get Immediate Help</span>
            </a>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>What We Offer</h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto mb-12'>Salama Shield provides a comprehensive, secure, and user-friendly platform for women seeking help and information about gender-based violence.</p>
          <div className='grid md:grid-cols-3 gap-8 text-left'>
            <div className='bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow'>
              <h3 className='text-2xl font-bold text-teal-700 mb-3'>Information Hub</h3>
              <p className='text-gray-600 mb-4'>Access clear, concise articles and guides on understanding your rights, identifying abuse, and safety planning.</p>
              <Link to='/info-hub' className='font-semibold text-teal-600 hover:text-teal-800 flex items-center gap-2'>Learn More <ArrowRight className='h-5 w-5' /></Link>
            </div>
            <div className='bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow'>
              <h3 className='text-2xl font-bold text-teal-700 mb-3'>Resource Directory</h3>
              <p className='text-gray-600 mb-4'>Find local and national support services, including shelters, legal aid, counseling, and hotlines, with our secure directory.</p>
              <Link to='/resources' className='font-semibold text-teal-600 hover:text-teal-800 flex items-center gap-2'>Find Help <ArrowRight className='h-5 w-5' /></Link>
            </div>
            <div className='bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow'>
              <h3 className='text-2xl font-bold text-teal-700 mb-3'>Community Stories</h3>
              <p className='text-gray-600 mb-4'>Read stories of resilience and hope from survivors. Share your own story anonymously if you choose.</p>
              <Link to='/stories' className='font-semibold text-teal-600 hover:text-teal-800 flex items-center gap-2'>Read Stories <ArrowRight className='h-5 w-5' /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}