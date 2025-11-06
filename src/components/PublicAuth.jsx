import React from 'react';
import { ArrowRight, LogIn, Mail } from 'lucide-react';

const PublicAuth = () => {
  return (
    <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight" style={{ color: '#333333' }}>
          Learn languages with confidence
        </h1>
        <p className="text-gray-600">
          Prepare for IELTS, TOEFL, and more with structured courses, interactive lessons, and real progress tracking.
        </p>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
          <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-white" style={{ backgroundColor: '#00AEEF' }}>
            <LogIn className="w-5 h-5" /> Sign up with Google
          </button>
          <div className="text-center text-sm text-gray-500">or</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border text-sm" style={{ borderColor: '#00AEEF', color: '#00AEEF' }}>
              <Mail className="w-4 h-4" /> Tutor / Admin Login
            </button>
            <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border text-sm text-gray-700 hover:bg-gray-50">
              Learn More <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-[#F5F7FA] p-6 border border-gray-100">
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: 'IELTS Speaking Masterclass', tutor: 'Ms. Hana', price: 'Rp 499,000', duration: '30-day Access' },
            { title: 'TOEFL Essentials', tutor: 'Mr. Amir', price: 'Rp 399,000', duration: '30-day Access' },
            { title: 'IELTS Writing 7+', tutor: 'Ms. Naya', price: 'Rp 549,000', duration: '60-day Access' },
            { title: 'Academic Vocabulary Boost', tutor: 'Dr. Lee', price: 'Rp 249,000', duration: '30-day Access' },
          ].map((c, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
              <div className="aspect-video rounded-lg bg-gray-100 mb-3" />
              <div className="font-semibold" style={{ color: '#333333' }}>{c.title}</div>
              <div className="text-sm text-gray-500">{c.tutor}</div>
              <div className="mt-2 text-sm flex items-center justify-between">
                <span className="font-semibold" style={{ color: '#00AEEF' }}>{c.price}</span>
                <span className="text-gray-500">/ {c.duration}</span>
              </div>
              <button className="mt-3 w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white" style={{ backgroundColor: '#00AEEF' }}>
                View Course
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicAuth;
