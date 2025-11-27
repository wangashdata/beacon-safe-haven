import { useState } from 'react';
import { toast } from 'sonner';
import { Send, Mail, Phone, AlertTriangle } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    toast.loading('Sending your message...');

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message sent successfully! We will get back to you shortly.');
      setName('');
      setEmail('');
      setMessage('');
    }, 2000);
  };

  return (
    <div className='bg-white py-12 md:py-20 animate-fadeIn'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-800'>Contact Us</h1>
          <p className='text-lg text-gray-600 mt-4 max-w-2xl mx-auto'>We are here to help. Reach out for non-urgent support or inquiries.</p>
        </div>

        <div className='bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-md mb-10 flex items-center gap-4' role='alert'>
          <AlertTriangle className='h-8 w-8' />
          <div>
            <p className='font-bold'>For Immediate Danger, Please Call 911.</p>
            <p>This contact form is not monitored 24/7. For emergencies, please use the appropriate emergency services.</p>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <div className='bg-gray-50 p-8 rounded-lg shadow-md'>
            <h2 className='text-3xl font-bold text-gray-800 mb-6'>Send a Secure Message</h2>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label htmlFor='name' className='block text-lg font-medium text-gray-700'>Name (Optional)</label>
                <input type='text' id='name' value={name} onChange={e => setName(e.target.value)} className='mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500' />
              </div>
              <div>
                <label htmlFor='email' className='block text-lg font-medium text-gray-700'>Email (Optional)</label>
                <p className='text-sm text-gray-500 mb-1'>Provide an email only if you feel it is safe for us to respond to you there.</p>
                <input type='email' id='email' value={email} onChange={e => setEmail(e.target.value)} className='mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500' />
              </div>
              <div>
                <label htmlFor='message' className='block text-lg font-medium text-gray-700'>Message</label>
                <textarea id='message' value={message} onChange={e => setMessage(e.target.value)} rows={6} required className='mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500'></textarea>
              </div>
              <button type='submit' disabled={isSubmitting} className='w-full bg-teal-600 text-white font-bold py-3 px-6 rounded-full hover:bg-teal-700 transition-colors duration-300 disabled:bg-gray-400 flex items-center justify-center gap-2'>
                <Send className='h-5 w-5' />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className='space-y-8'>
            <div className='flex items-start gap-4'>
              <Mail className='h-8 w-8 text-teal-600 mt-1' />
              <div>
                <h3 className='text-2xl font-bold text-gray-800'>General Inquiries</h3>
                <p className='text-gray-600'>For partnerships, media, or general questions, please email us.</p>
                <a href='mailto:info@salamashield.org' className='text-lg text-teal-600 hover:underline'>info@salamashield.org</a>
              </div>
            </div>
            <div className='flex items-start gap-4'>
              <Phone className='h-8 w-8 text-teal-600 mt-1' />
              <div>
                <h3 className='text-2xl font-bold text-gray-800'>24/7 Hotlines</h3>
                <p className='text-gray-600'>These national hotlines are free, confidential, and available 24/7.</p>
                <a href='tel:1-800-799-7233' className='block text-lg text-teal-600 hover:underline'>1-800-799-7233 (USA)</a>
                <a href='tel:0808-2000-247' className='block text-lg text-teal-600 hover:underline'>0808 2000 247 (UK)</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}