import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Header from './components/Header';
import Footer from './components/Footer';
import QuickExitButton from './components/QuickExitButton';
import Home from './pages/Home.tsx';
import InformationHub from './pages/InformationHub.tsx';
import ResourceDirectory from './pages/ResourceDirectory.tsx';
import InteractiveTools from './pages/InteractiveTools.tsx';
import Stories from './pages/Stories.tsx';
import Contact from './pages/Contact.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import SiteMap from './pages/SiteMap.tsx';

export default function App() {
  return (
    <Router>
      <div className='bg-white text-gray-800 font-sans leading-normal tracking-normal'>
        <Toaster position='top-center' />
        <Header />
        <QuickExitButton />
        <main className='pt-20'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/info-hub' element={<InformationHub />} />
            <Route path='/resources' element={<ResourceDirectory />} />
            <Route path='/tools' element={<InteractiveTools />} />
            <Route path='/stories' element={<Stories />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/privacy' element={<PrivacyPolicy />} />
            <Route path='/sitemap' element={<SiteMap />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}