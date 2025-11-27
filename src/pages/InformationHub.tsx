import { BookOpen, Shield, Scale } from 'lucide-react';

export default function InformationHub() {
  const articles = [
    {
      title: 'Understanding Your Rights',
      description: 'Learn about legal protections available to you. This section covers restraining orders, custody, and more.',
      icon: Scale,
      category: 'Legal'
    },
    {
      title: 'Identifying Types of Abuse',
      description: 'Abuse is not just physical. Learn to recognize the signs of emotional, financial, and digital abuse.',
      icon: Shield,
      category: 'Education'
    },
    {
      title: 'Creating a Safety Plan',
      description: 'A step-by-step guide to creating a personalized safety plan for yourself and your children.',
      icon: BookOpen,
      category: 'Planning'
    },
    {
      title: 'Digital Safety & Privacy',
      description: 'Tips for securing your online accounts, recognizing stalkingware, and communicating safely online.',
      icon: Shield,
      category: 'Digital Security'
    },
    {
      title: 'Healing and Recovery',
      description: 'Information on trauma, self-care, and the journey of healing after experiencing violence.',
      icon: BookOpen,
      category: 'Wellness'
    },
    {
      title: 'Supporting a Friend',
      description: 'How to provide support to someone you know who may be experiencing abuse.',
      icon: Scale,
      category: 'Community'
    },
  ];

  return (
    <div className='bg-white py-12 md:py-20 animate-fadeIn'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-800'>Information Hub</h1>
          <p className='text-lg text-gray-600 mt-4 max-w-2xl mx-auto'>Knowledge is power. Browse our articles to learn more about staying safe and understanding your options.</p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {articles.map((article, index) => (
            <div key={index} className='bg-gray-50 rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col'>
              <div className='flex-shrink-0'>
                <article.icon className='h-12 w-12 text-teal-600 mb-4' />
                <span className='text-sm font-semibold text-teal-700 bg-teal-100 py-1 px-3 rounded-full'>{article.category}</span>
                <h2 className='text-2xl font-bold text-gray-800 mt-4 mb-2'>{article.title}</h2>
              </div>
              <div className='flex-grow'>
                <p className='text-gray-600'>{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}