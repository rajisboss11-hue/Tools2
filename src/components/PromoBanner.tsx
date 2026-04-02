import { useEffect, useState } from 'react';

interface PromoBannerProps {
  format?: '728x90' | '300x250' | '160x300' | '160x600' | '468x60' | '320x50' | 'native' | 'sticky-bottom' | 'popunder' | 'social-bar';
  id?: string;
  className?: string;
}

export default function PromoBanner({ format = '728x90', id = 'demo-ad-id', className = '' }: PromoBannerProps) {
  const [refreshKey, setRefreshKey] = useState(0);

  // Auto-refresh banners every 15 seconds to multiply impressions by 4x per minute
  useEffect(() => {
    if (format !== 'popunder' && format !== 'social-bar' && format !== 'native') {
      const interval = setInterval(() => {
        setRefreshKey(prev => prev + 1);
      }, 15000);
      return () => clearInterval(interval);
    }
  }, [format]);

  if (format === 'popunder' || format === 'social-bar') {
    return null;
  }

  let key = '';
  let width = 0;
  let height = 0;
  let isNative = false;

  if (format === '728x90') { key = 'c9d5bd64ebed2ce68f748d1d2e95290e'; width = 728; height = 90; }
  else if (format === '300x250') { key = '3656ae545d5d1bbaebb88268dcf8f2c8'; width = 300; height = 250; }
  else if (format === '160x300') { key = '6313c514308463e5bbc31477a1a49f81'; width = 160; height = 300; }
  else if (format === '160x600') { key = '6ecf21f7a9ebd31f99d02c112e755b5e'; width = 160; height = 600; }
  else if (format === '468x60') { key = 'dc50818243dfd3db89595cf940039afa'; width = 468; height = 60; }
  else if (format === '320x50' || format === 'sticky-bottom') { key = '81b1afafd0635a0ca0f8a005fb4baee1'; width = 320; height = 50; }
  else if (format === 'native') { isNative = true; height = 150; }

  const isSticky = format === 'sticky-bottom';
  const w = width ? `${width}px` : '100%';
  const h = height ? `${height}px` : '100%';

  const src = `/ad.html?key=${key}&w=${width}&h=${height}&native=${isNative}`;

  return (
    <div className={`flex flex-col items-center justify-center overflow-hidden ${isSticky ? 'fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] py-2' : ''} ${className}`}>
      <iframe
        key={`${format}-${refreshKey}`}
        src={src}
        style={{ width: w, height: h, border: 'none', overflow: 'hidden' }}
        scrolling="no"
        title={`Adsterra ${format}`}
        sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin"
      />
    </div>
  );
}
