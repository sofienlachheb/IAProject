import React from 'react';
import { FileText, Wand2, Search, Send } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Choose Your Topic',
    description: 'Select your content type and topic, or import your existing content structure.'
  },
  {
    icon: Wand2,
    title: 'AI Generation',
    description: 'Our advanced AI creates high-quality, engaging content optimized for your needs.'
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Built-in tools automatically optimize your content for search engines.'
  },
  {
    icon: Send,
    title: 'Publish & Track',
    description: 'Publish directly to your platforms and monitor performance in real-time.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How ContentAI Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Generate SEO-optimized content in four simple steps
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gray-100 -translate-y-1/2 hidden lg:block"></div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white mb-6 relative z-10">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            Try it now
          </button>
        </div>
      </div>
    </section>
  );
}