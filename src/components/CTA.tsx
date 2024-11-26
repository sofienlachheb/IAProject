import React from 'react';
import { Zap } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700"></div>
      <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:16px_16px]"></div>
      
      <div className="relative container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-500/30 rounded-full mb-8">
            <Zap className="h-5 w-5 text-white mr-2" />
            <span className="text-sm font-medium text-white">
              Start creating content in minutes
            </span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Ready to revolutionize your content strategy?
          </h2>
          
          <p className="text-lg text-indigo-100 mb-8">
            Join thousands of content creators who are already using ContentAI to scale their content production and boost their SEO rankings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-gray-50 transition-colors">
              Get started for free
            </button>
            <button className="inline-flex items-center px-6 py-3 rounded-lg border border-white text-white font-semibold hover:bg-white/10 transition-colors">
              Schedule a demo
            </button>
          </div>
          
          <p className="mt-6 text-sm text-indigo-100">
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}