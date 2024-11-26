import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "ContentAI has transformed our content strategy. We're now producing 5x more content with better SEO rankings.",
    author: "Sarah Thompson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "The AI-powered content generation is incredible. It's like having a team of expert writers at your fingertips.",
    author: "Michael Chen",
    role: "Content Manager",
    company: "Growth Labs",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "We've seen a 40% increase in organic traffic since using ContentAI. The SEO optimization is top-notch.",
    author: "Emily Rodriguez",
    role: "SEO Specialist",
    company: "Digital Edge",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by content creators worldwide
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See what our customers have to say about their experience with ContentAI
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-indigo-100" />
              
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-700 mb-6">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.avatar}
                  alt={testimonial.author}
                />
                <div className="ml-4">
                  <div className="font-medium text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-indigo-600">
            <span className="font-semibold">4.9/5 average rating</span>
            <span className="px-2 py-1 text-sm bg-indigo-50 rounded-full">
              500+ reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}