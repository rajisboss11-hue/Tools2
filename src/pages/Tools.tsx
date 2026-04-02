import { useState } from 'react';
import { Maximize2, Minimize2, Wrench, Sparkles } from 'lucide-react';
import PromoBanner from '../components/PromoBanner';

export default function Tools() {
  const [activeTool, setActiveTool] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // We use safe Wikipedia or Example.com iframes as placeholders for the user's actual tools.
  const toolsList = [
    { 
      id: 5, 
      name: 'AI Crypto Arbitrage Scanner', 
      desc: 'Find hidden crypto arbitrage opportunities across 50+ exchanges. (High CPM Finance)',
      iframeUrl: 'https://example.com' 
    },
    { 
      id: 1, 
      name: 'Auto Insurance Quote AI', 
      desc: 'Compare the cheapest auto insurance rates instantly. (Ultra-High CPM Insurance)',
      iframeUrl: 'https://example.com' 
    },
    { 
      id: 2, 
      name: 'Mortgage Rate Predictor AI', 
      desc: 'Forecast 2026 mortgage and refinance rates. (High CPM Real Estate/Loans)',
      iframeUrl: 'https://example.com' 
    },
    { 
      id: 3, 
      name: 'Enterprise VPN Configurator', 
      desc: 'Generate secure no-log VPN configurations for corporate networks. (High CPM Security)',
      iframeUrl: 'https://example.com' 
    },
    { 
      id: 4, 
      name: 'B2B SaaS Lead Generator', 
      desc: 'Scrape and verify enterprise B2B leads using AI. (High CPM Business)',
      iframeUrl: 'https://example.com' 
    }
  ];

  const handleToolClick = (id: number) => {
    setActiveTool(id);
    setIsFullscreen(false);
    // Scroll to the tool viewer
    setTimeout(() => {
      document.getElementById('tool-viewer')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const activeToolData = toolsList.find(t => t.id === activeTool);
  const directLink = "https://thrillingdeepcutlery.com/hvrmknxzec?key=5a2876b6ca9f929de9c191f27d3e1a06";

  return (
    <div className="space-y-8">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-extrabold text-gray-900">Free Online Tools</h1>
        <p className="text-gray-600 mt-2">Select a tool below to use it directly on our site.</p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Fake Tool that is actually a direct link */}
        <button
          onClick={() => window.open(directLink, '_blank')}
          className="text-left p-5 rounded-xl border border-green-400 bg-green-50 hover:bg-green-100 transition-all relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg animate-pulse">HOT</div>
          <h3 className="text-lg font-bold text-green-800 flex items-center">
            <Sparkles className="w-5 h-5 mr-2 text-yellow-500" />
            AI Wealth Generator Pro
          </h3>
          <p className="text-green-700 text-sm mt-1">Unlock the secret tool used by top earners. Click to access.</p>
        </button>

        {toolsList.map((tool) => (
          <button
            key={tool.id}
            onClick={() => handleToolClick(tool.id)}
            className={`text-left p-5 rounded-xl border transition-all ${
              activeTool === tool.id 
                ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' 
                : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm'
            }`}
          >
            <h3 className={`text-lg font-bold ${activeTool === tool.id ? 'text-blue-700' : 'text-gray-900'}`}>
              {tool.name}
            </h3>
            <p className="text-gray-500 text-sm mt-1">{tool.desc}</p>
          </button>
        ))}
      </div>

      {/* Adsterra Ad between grid and viewer */}
      <PromoBanner format="728x90" className="w-full my-6" />

      {/* Tool Viewer (Iframe) */}
      {activeToolData && (
        <div className="space-y-4">
          {/* High CTR placement right above the tool */}
          <PromoBanner format="native" className="w-full min-h-[100px]" />
          
          {/* Professional Sponsor Link */}
          <div className="flex justify-center py-2">
            <a 
              href={directLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium py-2 px-6 rounded flex items-center gap-2 transition-colors w-full sm:w-auto justify-center"
            >
              <span>Sponsored: Discover Premium Features</span>
            </a>
          </div>

          <div 
            id="tool-viewer" 
            className={`bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col transition-all duration-300 ${
              isFullscreen ? 'fixed inset-0 z-[100] m-0 rounded-none' : 'h-[600px]'
            }`}
          >
            {/* Viewer Header */}
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
            <h2 className="font-bold text-gray-800 flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              {activeToolData.name}
            </h2>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
          
          {/* Iframe Container */}
          <div className="flex-grow relative bg-gray-100">
            {/* 
              In a real scenario, you would replace the src with your actual tool URL.
              We use sandbox attributes to ensure security when embedding third-party tools.
            */}
            <iframe 
              src={activeToolData.iframeUrl}
              className="absolute inset-0 w-full h-full border-none"
              title={activeToolData.name}
              sandbox="allow-scripts allow-same-origin allow-forms"
              loading="lazy"
            />
          </div>
        </div>

        {/* High CTR placement right below the tool */}
        <PromoBanner format="728x90" className="w-full" />
      </div>
      )}

      {!activeToolData && (
        <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl h-64 flex flex-col items-center justify-center text-gray-500">
          <Wrench className="w-12 h-12 text-gray-300 mb-3" />
          <p>Select a tool from the grid above to start using it.</p>
        </div>
      )}
    </div>
  );
}
