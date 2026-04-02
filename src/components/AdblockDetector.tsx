import { useState, useEffect } from 'react';
import { ShieldAlert, RefreshCw } from 'lucide-react';

export default function AdblockDetector() {
  const [adblockDetected, setAdblockDetected] = useState(false);

  useEffect(() => {
    // Create a "bait" element that ad blockers typically target
    const bait = document.createElement('div');
    bait.className = 'ad-banner adsbox doubleclick sponsor-ad pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links';
    bait.style.position = 'absolute';
    bait.style.left = '-9999px';
    bait.style.top = '-9999px';
    bait.style.height = '10px';
    bait.style.width = '10px';
    document.body.appendChild(bait);

    // Check if the bait was removed or hidden after a short delay
    const checkAdblock = () => {
      if (!document.body.contains(bait)) {
        setAdblockDetected(true);
        return;
      }

      const styles = window.getComputedStyle(bait);
      const isHidden = 
        bait.offsetHeight === 0 || 
        bait.offsetWidth === 0 || 
        styles.display === 'none' || 
        styles.visibility === 'hidden';

      if (isHidden) {
        setAdblockDetected(true);
      }

      // Cleanup
      if (document.body.contains(bait)) {
        document.body.removeChild(bait);
      }
    };

    // Delay allows the adblocker time to process the DOM
    const timer = setTimeout(checkAdblock, 500);

    return () => {
      clearTimeout(timer);
      if (document.body.contains(bait)) {
        document.body.removeChild(bait);
      }
    };
  }, []);

  if (!adblockDetected) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-gray-900/95 backdrop-blur-md p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center animate-in fade-in zoom-in duration-300">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShieldAlert className="w-10 h-10 text-red-600" />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Ad Blocker Detected</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          We rely on ads to keep <strong>FREE ALL AI</strong> running and 100% free for everyone. 
          Please disable your ad blocker or whitelist our site to continue using our tools.
        </p>
        <button 
          onClick={() => window.location.reload()} 
          className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-5 h-5" />
          I have disabled it, refresh page
        </button>
      </div>
    </div>
  );
}
