import { ClipboardList, Map, ShieldQuestion } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InteractiveTools() {
  const tools = [
    {
      title: 'Anonymous Self-Assessment',
      description: 'A private quiz to help you understand your situation and identify potential risks. Your answers are not stored.',
      icon: ShieldQuestion,
      link: '#',
      status: 'Coming Soon'
    },
    {
      title: 'Safety Plan Generator',
      description: 'Create a personalized safety plan with our step-by-step interactive tool. Save or print it securely.',
      icon: ClipboardList,
      link: '#',
      status: 'Coming Soon'
    },
    {
      title: 'Local Services Map',
      description: 'An interactive map to find verified support centers, shelters, and hospitals near your location.',
      icon: Map,
      link: '#',
      status: 'Coming Soon'
    },
  ];

  return (
    <div className='bg-white py-12 md:py-20 animate-fadeIn'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-800'>Interactive Safety Tools</h1>
          <p className='text-lg text-gray-600 mt-4 max-w-2xl mx-auto'>Empower yourself with private, secure tools designed for your safety and peace of mind.</p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {tools.map((tool, index) => (
            <div key={index} className='relative bg-gray-50 rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col text-center items-center'>
              <div className='absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full'>{tool.status}</div>
              <tool.icon className='h-16 w-16 text-teal-600 mb-4' />
              <h2 className='text-2xl font-bold text-gray-800 mb-3'>{tool.title}</h2>
              <p className='text-gray-600 mb-6 flex-grow'>{tool.description}</p>
              <Link to={tool.link} className='mt-auto bg-teal-600 text-white font-bold py-3 px-6 rounded-full hover:bg-teal-700 transition-colors duration-300 aria-disabled:bg-gray-400 aria-disabled:cursor-not-allowed' aria-disabled={tool.status === 'Coming Soon'}>
                Open Tool
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}