import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PromoBanner from '../components/PromoBanner';

export default function Blog() {
  const posts = [
    {
      id: 9,
      title: 'AI in Personal Injury Law: Maximizing Mesothelioma Settlements',
      excerpt: 'How top attorneys are using AI to analyze medical records and maximize asbestos and mesothelioma lawsuit payouts.',
      date: 'April 2, 2026',
      category: 'Legal',
      image: 'https://picsum.photos/seed/law/800/400'
    },
    {
      id: 10,
      title: 'Top 5 AI Auto Insurance Providers for High-Risk Drivers',
      excerpt: 'Compare the best AI-driven car insurance quotes that offer massive discounts for high-risk and young drivers.',
      date: 'April 2, 2026',
      category: 'Insurance',
      image: 'https://picsum.photos/seed/insurance/800/400'
    },
    {
      id: 11,
      title: 'Best AI Mortgage Brokers for Refinancing in 2026',
      excerpt: 'Lock in the lowest interest rates by using AI mortgage brokers to scan thousands of lenders instantly.',
      date: 'April 2, 2026',
      category: 'Loans',
      image: 'https://picsum.photos/seed/mortgage/800/400'
    },
    {
      id: 12,
      title: 'Enterprise B2B SaaS: AI Lead Generation Strategies',
      excerpt: 'Scale your B2B software company to $10M ARR using automated AI lead generation and cold email outreach.',
      date: 'April 2, 2026',
      category: 'B2B Software',
      image: 'https://picsum.photos/seed/saas/800/400'
    },
    {
      id: 5,
      title: 'Top 5 AI Crypto Trading Bots for Maximum Profits in 2026',
      excerpt: 'Discover the best AI-powered crypto trading bots that automate your strategy and maximize your trading profits 24/7.',
      date: 'April 2, 2026',
      category: 'Finance',
      image: 'https://picsum.photos/seed/crypto/800/400'
    },
    {
      id: 6,
      title: 'Best Enterprise Cloud Hosting Solutions for AI Applications',
      excerpt: 'Compare the top cloud hosting providers offering high-performance GPU instances and scalable infrastructure for AI.',
      date: 'April 2, 2026',
      category: 'Hosting',
      image: 'https://picsum.photos/seed/hosting/800/400'
    },
    {
      id: 7,
      title: 'How to Make $10,000/Month with AI Affiliate Marketing',
      excerpt: 'Learn the exact strategies to leverage AI tools for content creation and scale your affiliate marketing income.',
      date: 'April 2, 2026',
      category: 'Make Money',
      image: 'https://picsum.photos/seed/money/800/400'
    },
    {
      id: 8,
      title: 'Top 10 No-Log VPNs for Secure AI Development',
      excerpt: 'Protect your proprietary datasets and API keys with the most secure, independently audited no-log VPN services.',
      date: 'April 2, 2026',
      category: 'Security',
      image: 'https://picsum.photos/seed/vpn/800/400'
    },
    {
      id: 1,
      title: 'Grok AI: The Future of Uncensored Artificial Intelligence',
      excerpt: 'Explore how Grok AI is changing the landscape of artificial intelligence with real-time knowledge and a rebellious streak.',
      date: 'April 1, 2026',
      category: 'AI Tools',
      image: 'https://picsum.photos/seed/grok/800/400'
    },
    {
      id: 2,
      title: 'Free Credit Cards Generator: How It Works and Use Cases',
      excerpt: 'Learn about virtual credit card generators, how developers use them for testing payment gateways, and safety tips.',
      date: 'March 28, 2026',
      category: 'Tools',
      image: 'https://picsum.photos/seed/credit/800/400'
    },
    {
      id: 3,
      title: 'Seedance 2.0: Revolutionizing AI Video Generation',
      excerpt: 'Discover the new features in Seedance 2.0, the ultimate AI video generator that brings your imagination to life.',
      date: 'March 25, 2026',
      category: 'AI Video',
      image: 'https://picsum.photos/seed/video/800/400'
    },
    {
      id: 4,
      title: 'Kling 3 Released: The Next Generation of AI Models',
      excerpt: 'Kling 3 is here, offering unprecedented capabilities in text and image processing. See what\'s new in this massive update.',
      date: 'March 20, 2026',
      category: 'AI News',
      image: 'https://picsum.photos/seed/kling/800/400'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-extrabold text-gray-900">Blog Articles</h1>
        <p className="text-gray-600 mt-2">Read the latest news and guides about AI, Grok, Seedance, and more.</p>
      </div>

      <div className="space-y-8">
        {posts.map((post, index) => (
          <div key={post.id}>
            <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span className="bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full font-medium">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  <Link to={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                  Read full article <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
            
            {/* Insert an ad after EVERY post for maximum earning */}
            {index !== posts.length - 1 && (
              <div className="my-8">
                <PromoBanner format="native" className="w-full min-h-[120px]" />
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Pagination Placeholder */}
      <div className="flex justify-center pt-8">
        <nav className="flex gap-2">
          <button className="px-4 py-2 border rounded-md bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
          <button className="px-4 py-2 border rounded-md bg-blue-600 text-white font-medium">1</button>
          <button className="px-4 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-50">2</button>
          <button className="px-4 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-50">3</button>
          <button className="px-4 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-50">Next</button>
        </nav>
      </div>
    </div>
  );
}
