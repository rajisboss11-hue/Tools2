import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import PromoBanner from './PromoBanner';

export default function Layout() {
  const location = useLocation();
  const [clicks, setClicks] = useState(0);

  // Aggressive Monetization: Force a direct link click every 3 clicks anywhere on the page
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      // Don't intercept if they are already clicking an ad or a link
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('iframe') || target.closest('button')) {
        return;
      }

      setClicks(prev => {
        const newCount = prev + 1;
        if (newCount >= 3) {
          // Trigger direct link in background
          window.open("https://thrillingdeepcutlery.com/hvrmknxzec?key=5a2876b6ca9f929de9c191f27d3e1a06", "_blank");
          return 0; // Reset counter
        }
        return newCount;
      });
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] font-sans pb-24">
      {/* Global Invisible Ads (Highest CPM - Popunder & Social Bar) */}
      <PromoBanner format="popunder" />
      <PromoBanner format="social-bar" />

      <Navbar />
      
      {/* Top Header Ad (Desktop: 728x90, Mobile: 300x250) */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6 flex flex-col items-center gap-4">
        {/* Desktop Only Ad */}
        <PromoBanner format="728x90" className="hidden md:flex w-full max-w-4xl mx-auto" />
        
        {/* Mobile Only Ad - High Revenue First for Mobile Users */}
        <PromoBanner format="300x250" className="flex md:hidden w-full max-w-[300px] mx-auto" />
      </div>

      <main className="flex-grow max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <div className="flex-grow min-w-0">
          <Outlet />
        </div>
        
        {/* Sidebar */}
        <Sidebar />
      </main>

      <Footer />

      {/* Sticky Bottom Ad (High Viewability = High Earnings) */}
      <PromoBanner format="sticky-bottom" className="h-[90px]" />
    </div>
  );
}
