'use client'
import { useState } from 'react';
import Link from 'next/link';

const SERVICES = [
  { icon: '🌿', label: 'Lawn Care' },
  { icon: '🌳', label: 'Tree & Shrub Care' },
  { icon: '🌸', label: 'Garden Maintenance' },
  { icon: '🌱', label: 'Sod Laying' },
  { icon: '🍂', label: 'Fall Clean Up' },
  { icon: '💧', label: 'Fertilizer Application' },
  { icon: '🪵', label: 'Mulch Application' },
  { icon: '🏠', label: 'Gutter Clean Out' },
  { icon: '🔧', label: 'Sprinkler Repair' },
  { icon: '➕', label: 'Other' },
];

const TRUST = [
  'Free estimates, always',
  'No contracts required',
  'Family-owned business',
  'Response within 24 hrs',
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function EstimateForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleService = (label: string) => {
    setSelectedServices(prev =>
      prev.includes(label) ? prev.filter(s => s !== label) : [...prev, label]
    );
    if (errors.services) setErrors(e => ({ ...e, services: '' }));
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (selectedServices.length === 0) next.services = 'Please select at least one service.';
    if (!name.trim()) next.name = 'Full name is required.';
    if (!phone.trim()) next.phone = 'Phone number is required.';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) next.email = 'A valid email is required.';
    if (!zip.trim() || !/^\d{5}$/.test(zip)) next.zip = 'Enter a valid 5-digit zip code.';
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length > 0) { setErrors(next); return; }
    setStatus('loading');
    try {
      const res = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ services: selectedServices, name, phone, email, zip, message }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (field: string) =>
    `w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900 ${
      errors[field] ? 'border-red-400' : 'border-gray-300'
    }`;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Form card */}
          <div className="lg:col-span-7 bg-white rounded-2xl shadow-lg p-8">
            {status === 'success' ? (
              <div className="text-center py-10">
                <p className="text-6xl text-green-700 mb-6">&#10003;</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Your request was sent!</h2>
                <p className="text-gray-600 mb-2">
                  We&apos;ll be in touch within 24 hours. You can also reach us directly:
                </p>
                <a
                  href="tel:8174567068"
                  className="block text-xl font-semibold text-green-800 hover:text-green-600 transition mb-8"
                >
                  (817) 456-7068
                </a>
                <Link href="/" className="text-green-700 font-semibold hover:text-green-900 transition">
                  &larr; Back to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>

                {/* Section 1 */}
                <div className="mb-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-green-700 mb-1">Step 1</p>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">What service(s) do you need?</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {SERVICES.map(({ icon, label }) => {
                      const selected = selectedServices.includes(label);
                      return (
                        <button
                          key={label}
                          type="button"
                          onClick={() => toggleService(label)}
                          className={`flex flex-col items-center justify-center gap-2 p-3 rounded-xl border-2 text-sm font-semibold transition-all duration-150 ${
                            selected
                              ? 'bg-green-800 text-white border-green-800'
                              : 'bg-white text-gray-700 border-gray-200 hover:border-green-600'
                          }`}
                        >
                          <span className="text-2xl">{icon}</span>
                          <span className="leading-tight text-center">{label}</span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.services && (
                    <p className="text-red-500 text-sm mt-2">{errors.services}</p>
                  )}
                </div>

                {/* Section 2 */}
                <div className="mb-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-green-700 mb-1">Step 2</p>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Your contact info</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={e => { setName(e.target.value); setErrors(er => ({ ...er, name: '' })); }}
                        placeholder="Jane Smith"
                        className={inputClass('name')}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={e => { setPhone(e.target.value); setErrors(er => ({ ...er, phone: '' })); }}
                        placeholder="(817) 555-0123"
                        className={inputClass('phone')}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        value={email}
                        onChange={e => { setEmail(e.target.value); setErrors(er => ({ ...er, email: '' })); }}
                        placeholder="jane@example.com"
                        className={inputClass('email')}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Zip Code</label>
                      <input
                        type="text"
                        value={zip}
                        onChange={e => { setZip(e.target.value); setErrors(er => ({ ...er, zip: '' })); }}
                        placeholder="76101"
                        maxLength={5}
                        className={inputClass('zip')}
                      />
                      {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip}</p>}
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="mb-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-green-700 mb-1">Step 3</p>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">Anything else we should know?</h2>
                  <p className="text-sm text-gray-500 mb-4">Optional — but helpful!</p>
                  <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Describe your yard, any special requests, best time to reach you..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900 resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm mb-4">
                    Something went wrong. Please try again or call us at{' '}
                    <a href="tel:8174567068" className="underline">(817) 456-7068</a>.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-green-800 text-white py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Request My Free Estimate →'}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 lg:sticky lg:top-[88px]">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-green-800 px-6 py-5">
                <p className="text-green-300 text-xs font-semibold uppercase tracking-widest mb-1">
                  Prefer to call?
                </p>
                <a
                  href="tel:8174567068"
                  className="text-white text-2xl font-bold hover:text-green-200 transition block"
                >
                  (817) 456-7068
                </a>
              </div>
              <div className="px-6 py-5 border-b border-gray-100">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Hours</p>
                <div className="space-y-1 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Mon &ndash; Fri</span><span className="font-medium">7:00 AM &ndash; 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span><span className="font-medium">8:00 AM &ndash; 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span><span className="text-gray-400">Closed</span>
                  </div>
                </div>
              </div>
              <div className="px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Why choose us</p>
                <ul className="space-y-2">
                  {TRUST.map(t => (
                    <li key={t} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-green-700 font-bold text-base">&#10003;</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
