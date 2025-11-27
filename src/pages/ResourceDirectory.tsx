import { useState } from 'react';
import { MapPin, Phone, Search, Globe } from 'lucide-react';

const resources = [
  { name: 'National Domestic Violence Hotline', phone: '1-800-799-7233', type: 'Hotline', location: 'National' },
  { name: 'RAINN (Rape, Abuse & Incest National Network)', phone: '1-800-656-4673', type: 'Hotline', location: 'National' },
  { name: 'Nairobi Women’s Hospital Gender Violence Recovery Centre', phone: '+254 719 638 709', type: 'Medical', location: 'Nairobi, KE' },
  { name: 'Usikimye', phone: '+254 718 458 393', type: 'Shelter', location: 'Nairobi, KE' },
  { name: 'The Safe House', phone: '+27 72 235 7306', type: 'Shelter', location: 'Cape Town, ZA' },
  { name: 'Lawyers for Human Rights', phone: '+27 12 320 2943', type: 'Legal', location: 'Pretoria, ZA' },
  { name: 'Women’s Legal Centre', phone: '+234 809 111 1904', type: 'Legal', location: 'Lagos, NG' },
];

export default function ResourceDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  const filteredResources = resources.filter(r => 
    (r.name.toLowerCase().includes(searchTerm.toLowerCase()) || r.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filterType === 'All' || r.type === filterType)
  );

  const resourceTypes = ['All', 'Hotline', 'Shelter', 'Legal', 'Medical'];

  return (
    <div className='bg-white py-12 md:py-20 animate-fadeIn'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/2d862e5f-6c67-4bae-8888-40fe0294de8e/resource-hub-zqves5x-1764273138728.webp' alt='Resource Hub Icon' className='h-24 w-24 mx-auto mb-4' />
          <h1 className='text-4xl md:text-5xl font-bold text-gray-800'>Resource Directory</h1>
          <p className='text-lg text-gray-600 mt-4 max-w-2xl mx-auto'>Find confidential support services near you. You are not alone.</p>
        </div>

        {/* Filters */}
        <div className='mb-10 p-6 bg-gray-50 rounded-lg shadow-sm flex flex-col sm:flex-row gap-4 items-center'>
          <div className='relative flex-grow w-full sm:w-auto'>
            <Search className='absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
            <input
              type='text'
              placeholder='Search by name or location (e.g., Nairobi, Legal)...'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className='w-full p-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500'
            />
          </div>
          <div className='flex-shrink-0'>
            <select 
              value={filterType}
              onChange={e => setFilterType(e.target.value)}
              className='w-full sm:w-auto p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500'
            >
              {resourceTypes.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>
        </div>

        {/* Resource List */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredResources.length > 0 ? (
            filteredResources.map((resource, index) => (
              <div key={index} className='bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow'>
                <div>
                  <h2 className='text-xl font-bold text-gray-800 mb-2'>{resource.name}</h2>
                  <p className='text-teal-600 font-semibold mb-4 bg-teal-50 inline-block px-3 py-1 rounded-full'>{resource.type}</p>
                  <div className='flex items-center text-gray-600 mb-2'>
                    <Phone className='h-5 w-5 mr-3 flex-shrink-0' />
                    <a href={`tel:${resource.phone}`} className='hover:text-teal-700'>{resource.phone}</a>
                  </div>
                  <div className='flex items-center text-gray-600'>
                    {resource.location === 'National' ? 
                      <Globe className='h-5 w-5 mr-3 flex-shrink-0' /> : 
                      <MapPin className='h-5 w-5 mr-3 flex-shrink-0' />
                    }
                    <span>{resource.location}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className='text-center text-gray-500 col-span-full'>No resources found matching your criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
}