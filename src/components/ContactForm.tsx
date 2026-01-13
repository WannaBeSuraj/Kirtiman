"use client";

import { FormEvent, useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  industry: string;
  projectType: string;
  message: string;
}

const industries = ['Water/Wastewater', 'Manufacturing', 'Infrastructure', 'Oil & Gas', 'Other'];
const projectTypes = ['Coating Services', 'Pipe Fabrication', 'Complete Pipeline Project', 'Consultation', 'Other'];

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: industries[0],
    projectType: projectTypes[0],
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string>('');

  const validate = () => {
    if (!form.name || !form.email || !form.phone || !form.industry || !form.projectType || !form.message) {
      return 'Please complete all required fields.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return 'Enter a valid email address.';
    }
    if (!/^\+?\d[\d\s-]{7,}$/.test(form.phone)) {
      return 'Enter a valid phone number.';
    }
    if (form.message.trim().length < 20) {
      return 'Message should be at least 20 characters.';
    }
    return '';
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');
    setStatus('loading');
    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('phone', form.phone);
      formData.append('company', form.company || '');
      formData.append('industry', form.industry);
      formData.append('projectType', form.projectType);
      formData.append('message', form.message);

      const res = await fetch('https://formspree.io/f/xpqqzrkg', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || 'Request failed');
      }
      setStatus('success');
      setForm({ ...form, name: '', email: '', phone: '', company: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setError('Failed to send message. Please try again or contact us directly.');
      setTimeout(() => {
        setStatus('idle');
        setError('');
      }, 5000);
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-gray-800">Name *</label>
          <input
            className="mt-2 w-full rounded-lg border border-gray-200 p-3 focus:border-primary focus:outline-none"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-800">Email *</label>
          <input
            type="email"
            className="mt-2 w-full rounded-lg border border-gray-200 p-3 focus:border-primary focus:outline-none"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-800">Phone *</label>
          <input
            className="mt-2 w-full rounded-lg border border-gray-200 p-3 focus:border-primary focus:outline-none"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-800">Company</label>
          <input
            className="mt-2 w-full rounded-lg border border-gray-200 p-3 focus:border-primary focus:outline-none"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-800">Industry *</label>
          <select
            className="mt-2 w-full rounded-lg border border-gray-200 p-3 focus:border-primary focus:outline-none"
            value={form.industry}
            onChange={(e) => setForm({ ...form, industry: e.target.value })}
            required
          >
            {industries.map((ind) => (
              <option key={ind} value={ind}>
                {ind}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-800">Project Type *</label>
          <select
            className="mt-2 w-full rounded-lg border border-gray-200 p-3 focus:border-primary focus:outline-none"
            value={form.projectType}
            onChange={(e) => setForm({ ...form, projectType: e.target.value })}
            required
          >
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-4">
        <label className="text-sm font-semibold text-gray-800">Message *</label>
        <textarea
          className="mt-2 w-full rounded-lg border border-gray-200 p-3 focus:border-primary focus:outline-none"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      {status === 'success' && (
        <p className="mt-2 text-sm text-green-700">Thank you! We'll contact you within 24 hours.</p>
      )}
      {status === 'error' && <p className="mt-2 text-sm text-red-600">Submission failed. Please retry.</p>}
      <button
        type="submit"
        className="btn-primary mt-4"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending…' : 'Request Technical Consultation'}
      </button>
    </form>
  );
}
