import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for content creators just getting started.',
    features: [
      '10,000 words per month',
      'Basic SEO optimization',
      '5 language support',
      'WordPress integration',
      'Email support'
    ]
  },
  {
    name: 'Professional',
    price: 79,
    description: 'For growing businesses and content teams.',
    features: [
      '50,000 words per month',
      'Advanced SEO tools',
      'All languages supported',
      'Priority support',
      'Team collaboration',
      'Analytics dashboard',
      'API access'
    ],
    featured: true
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'Custom solutions for large organizations.',
    features: [
      'Unlimited words',
      'Custom AI training',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
      'Advanced analytics',
      'White-label options'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect plan for your content needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 rounded-2xl ${
                tier.featured
                  ? 'bg-indigo-600 text-white ring-4 ring-indigo-600 scale-105'
                  : 'bg-white text-gray-900 ring-1 ring-gray-200'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-indigo-200 px-3 py-1 text-sm font-medium text-indigo-800">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <p className={`mt-2 text-sm ${tier.featured ? 'text-indigo-200' : 'text-gray-500'}`}>
                  {tier.description}
                </p>
                <p className="mt-6">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  <span className={tier.featured ? 'text-indigo-200' : 'text-gray-500'}>
                    /month
                  </span>
                </p>
              </div>

              <ul className="mb-8 space-y-4 flex-1">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className={`h-5 w-5 ${
                      tier.featured ? 'text-indigo-200' : 'text-indigo-600'
                    } mr-3`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-lg px-4 py-2.5 text-sm font-semibold ${
                  tier.featured
                    ? 'bg-white text-indigo-600 hover:bg-gray-50'
                    : 'bg-indigo-600 text-white hover:bg-indigo-500'
                } shadow-sm transition-colors`}
              >
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}