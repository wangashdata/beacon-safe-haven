import { LogOut } from 'lucide-react';

export default function QuickExitButton() {
  const handleExit = () => {
    window.open('https://www.google.com', '_new');
    window.location.replace('https://www.weather.com');
  };

  return (
    <button
      onClick={handleExit}
      className='fixed top-24 right-4 bg-red-600 text-white font-bold py-3 px-5 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 z-50 flex items-center space-x-2'
      aria-label='Quick Exit - leaves this site immediately'
    >
      <LogOut className='h-6 w-6' />
      <span>Quick Exit</span>
    </button>
  );
}