import React from 'react';
import { 
  Bot, 
  Globe, 
  Zap, 
  Rocket, 
  BarChart, 
  Layers,
  Workflow,
  Share2,
  Shield
} from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Advanced AI Writing',
    description: 'Powered by GPT-4 for human-like, engaging content that resonates with your audience.'
  },
  {
    icon: Rocket,
    title: 'SEO Optimization',
    description: 'Built-in SEO tools ensure your content ranks higher in search results.'
  },
  {
    icon: Globe,
    title: 'Multi-language Support',
    description: 'Generate content in multiple languages to reach a global audience.'
  },
  {
    icon: Zap,
    title: 'Bulk Generation',
    description: 'Create multiple pieces of content simultaneously to save time.'
  },
  {
    icon: BarChart,
    title: 'Analytics Dashboard',
    description: 'Track content performance and SEO metrics in real-time.'
  },
  {
    icon: Layers,
    title: 'Content Templates',
    description: 'Pre-built templates for various content types and industries.'
  },
  {
    icon: Workflow,
    title: 'WordPress Integration',
    description: 'Publish directly to your WordPress sites with one click.'
  },
  {
    icon: Share2,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with role-based access control.'
  },
  {
    icon: Shield,
    title: 'Plagiarism Check',
    description: 'Ensure your content is unique and original with built-in verification.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to create amazing content
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Powerful features to help you generate, optimize, and manage your content at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-50">
                      <Icon className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}