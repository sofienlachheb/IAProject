import React from 'react';
import { ArrowRight, Bot, Zap, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-24 sm:pb-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Generate SEO Content with{' '}
            <span className="text-indigo-600">AI Magic</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Create high-quality, SEO-optimized content at scale. Our AI-powered platform helps you generate engaging articles that rank higher on search engines.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center">
              Start Creating <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
              Watch demo <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div className="mt-16 flow-root sm:mt-24">
          <div className="relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <img
              src="https://images.unsplash.com/photo-1664575198308-3959904fa430?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="App screenshot"
              className="rounded-lg shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-3">
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <Bot className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                AI-Powered Content
              </dt>
              <dd className="inline">Generate unique, engaging content optimized for search engines.</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <Zap className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                Lightning Fast
              </dt>
              <dd className="inline">Create multiple articles simultaneously in seconds.</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <Globe className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                Multi-language
              </dt>
              <dd className="inline">Support for content generation in multiple languages.</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}