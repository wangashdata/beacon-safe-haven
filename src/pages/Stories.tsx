import { HeartHandshake } from 'lucide-react';

export default function Stories() {
  const communitySupportImageUrl = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/2d862e5f-6c67-4bae-8888-40fe0294de8e/community-support-jjfmzud-1764273132431.webp';

  const stories = [
    {
      id: 1,
      title: 'A New Beginning',
      excerpt: '"Leaving was the hardest and best decision of my life. I found support I never knew existed. There is hope after abuse." - Anonymous',
      tags: ['Hope', 'Resilience'],
    },
    {
      id: 2,
      title: 'Finding My Voice',
      excerpt: '"For years, I felt silenced. Sharing my story, even just with a counselor, was the first step to reclaiming my power." - J.D.',
      tags: ['Empowerment', 'Healing'],
    },
    {
      id: 3,
      title: 'From Surviving to Thriving',
      excerpt: '"The journey is long, but it is worth it. With the right resources and community, I am not just surviving; I am thriving." - M.K.',
      tags: ['Community', 'Strength'],
    },
  ];

  return (
    <div className='bg-white py-12 md:py-20 animate-fadeIn'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12'>
          <div className='md:w-1/2 text-center md:text-left'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-800'>Stories of Resilience</h1>
            <p className='text-lg text-gray-600 mt-4'>You are not alone in your journey. Read stories of hope, courage, and healing from a community of survivors. These narratives are shared to inspire and empower.</p>
            <button className='mt-8 bg-teal-600 text-white font-bold py-3 px-6 rounded-full hover:bg-teal-700 transition-colors duration-300 flex items-center gap-2 mx-auto md:mx-0'>
              <HeartHandshake className='h-6 w-6' />
              <span>Share Your Story (Anonymously)</span>
            </button>
          </div>
          <div className='md:w-1/2'>
            <img src={communitySupportImageUrl} alt='Community Support Illustration' className='rounded-lg shadow-xl w-full h-auto' />
          </div>
        </div>

        <div className='mt-20'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {stories.map((story) => (
              <div key={story.id} className='bg-gray-50 rounded-lg shadow-md p-8 flex flex-col h-full'>
                <blockquote className='text-gray-600 italic text-lg mb-4 border-l-4 border-teal-500 pl-4 flex-grow'>
                  {story.excerpt}
                </blockquote>
                <div className='mt-4'>
                  {story.tags.map(tag => (
                    <span key={tag} className='inline-block bg-teal-100 text-teal-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded-full'>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}