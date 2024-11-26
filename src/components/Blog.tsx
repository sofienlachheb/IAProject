import React from 'react';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'The Future of SEO: AI-Generated Content in 2024',
    description: 'Learn how artificial intelligence is revolutionizing content creation and SEO strategies.',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    author: 'Sarah Johnson',
    date: 'Mar 15, 2024'
  },
  {
    title: '10 Tips for Creating SEO-Optimized Content at Scale',
    description: 'Discover the best practices for generating and managing large amounts of SEO content.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
    author: 'Michael Chen',
    date: 'Mar 12, 2024'
  },
  {
    title: 'How AI is Changing Content Marketing Forever',
    description: 'Explore the impact of AI technology on modern content marketing strategies.',
    image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    author: 'Emily Roberts',
    date: 'Mar 10, 2024'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest from our blog
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Expert insights on content creation, SEO, and AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article key={index} className="flex flex-col bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.description}
                </p>
                <button className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-50 hover:bg-indigo-100">
            View all posts <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}