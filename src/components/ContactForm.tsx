'use client'
import { useState } from 'react';
import FadeIn from './FadeIn';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // TODO: wire up to form submission API
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center text-black mb-3">Request a Free Estimate</h2>
          <p className="text-center text-gray-500 mb-12">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </FadeIn>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Contact info panel */}
            <div className="bg-green-800 text-white p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              <div className="space-y-7">
                <div>
                  <p className="text-green-300 text-xs font-semibold uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:8174567068" className="text-xl font-semibold hover:text-green-300 transition">
                    (817) 456-7068
                  </a>
                </div>
                <div>
                  <p className="text-green-300 text-xs font-semibold uppercase tracking-widest mb-1">Hours</p>
                  <p className="text-green-100">Mon &ndash; Fri: 7:00 AM &ndash; 6:00 PM</p>
                  <p className="text-green-100">Sat: 8:00 AM &ndash; 4:00 PM</p>
                  <p className="text-green-100">Sun: Closed</p>
                </div>
                <div>
                  <p className="text-green-300 text-xs font-semibold uppercase tracking-widest mb-1">Service Area</p>
                  <p className="text-green-100">Fort Worth, Arlington, Saginaw,</p>
                  <p className="text-green-100">North Richland Hills, Mansfield,</p>
                  <p className="text-green-100">&amp; Haltom City</p>
                </div>
              </div>
            </div>

            {/* Form panel */}
            <div className="p-10">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <div className="text-5xl text-green-700 mb-4">&#10003;</div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Request Sent!</h3>
                  <p className="text-gray-500">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">Phone</label>
                    <input
                      type="tel"
                      placeholder="(817) 000-0000"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">Service Needed</label>
                    <select
                      required
                      defaultValue=""
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-700"
                    >
                      <option value="" disabled>Select a service...</option>
                      <option value="lawn-care">Weekly Lawn Care</option>
                      <option value="flower-beds">Flower Beds</option>
                      <option value="tree-shrub">Tree &amp; Shrub Care</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">Message</label>
                    <textarea
                      placeholder="Tell us about your project..."
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-green-800 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-60"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Request'}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-500 text-sm text-center">
                      Something went wrong. Please try again or call us at (817) 456-7068.
                    </p>
                  )}
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
