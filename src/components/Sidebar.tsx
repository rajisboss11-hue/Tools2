import PromoBanner from './PromoBanner';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const categories = ['Legal & Attorneys', 'Insurance Quotes', 'Mortgage & Loans', 'Finance & Crypto', 'Enterprise SaaS', 'Cybersecurity'];
  
  const recentPosts = [
    { id: 9, title: 'AI in Personal Injury Law: Maximizing Mesothelioma Settlements', path: '/blog/9' },
    { id: 10, title: 'Top 5 AI Auto Insurance Providers for High-Risk Drivers', path: '/blog/10' },
    { id: 11, title: 'Best AI Mortgage Brokers for Refinancing in 2026', path: '/blog/11' },
    { id: 5, title: 'Top 5 AI Crypto Trading Bots for Maximum Profits in 2026', path: '/blog/5' },
    { id: 12, title: 'Enterprise B2B SaaS: AI Lead Generation Strategies', path: '/blog/12' },
  ];

  return (
    <aside className="w-full lg:w-80 flex-shrink-0 space-y-6">
      {/* Sidebar Ad 1 */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Advertisement</h3>
        <PromoBanner format="300x250" className="w-full min-h-[250px]" />
      </div>

      {/* Support Us Widget */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-lg shadow-md text-white text-center">
        <h3 className="text-xl font-bold mb-2">Support FREE ALL AI</h3>
        <p className="text-blue-100 text-sm mb-4">Click below to support our servers and keep these AI tools 100% free forever!</p>
        <a 
          href="https://thrillingdeepcutlery.com/hvrmknxzec?key=5a2876b6ca9f929de9c191f27d3e1a06" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-700 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors shadow-sm"
        >
          Support Us ❤️
        </a>
      </div>

      {/* Categories Widget */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category, idx) => (
            <li key={idx}>
              <Link to="/blog" className="text-gray-600 hover:text-blue-600 flex items-center justify-between">
                <span>{category}</span>
                <span className="bg-gray-100 text-gray-500 text-xs py-1 px-2 rounded-full">
                  {Math.floor(Math.random() * 20) + 1}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts Widget */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Recent Posts</h3>
        <ul className="space-y-3">
          {recentPosts.map((post) => (
            <li key={post.id}>
              <Link to={post.path} className="text-gray-600 hover:text-blue-600 text-sm font-medium line-clamp-2">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar Ad 2 */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 sticky top-20">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Advertisement</h3>
        <PromoBanner format="160x300" className="w-full min-h-[300px]" />
      </div>
    </aside>
  );
}
