import React, { useState } from 'react';
import { ChevronDown, PlayCircle } from 'lucide-react';

const ModuleAccordion = ({ modules }) => {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-2">
      {modules.map((m, idx) => (
        <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpen(open === idx ? -1 : idx)}
            className="w-full flex items-center justify-between px-4 py-3 bg-[#F5F7FA]"
          >
            <span className="font-medium text-gray-800">{m.title}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${open === idx ? 'rotate-180' : ''}`} />
          </button>
          {open === idx && (
            <div className="bg-white divide-y">
              {m.lessons.map((l, li) => (
                <div key={li} className="flex items-center gap-2 px-4 py-3">
                  <PlayCircle className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-700">{l}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const CourseDetail = () => {
  const modules = [
    { title: 'Module 1: Speaking Basics', lessons: ['Fluency Drills', 'Pronunciation'] },
    { title: 'Module 2: Strategy', lessons: ['Part 1 Tactics', 'Part 2 Long Turn'] },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl overflow-hidden border border-gray-100 bg-white">
            <div className="aspect-video bg-gray-200" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: '#333333' }}>IELTS Speaking Masterclass</h2>
          <p className="text-gray-600">
            Master the IELTS Speaking component with targeted lessons, assignments, and real practice.
          </p>
          <ModuleAccordion modules={modules} />
          <div className="border border-gray-200 rounded-xl p-4 bg-white">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gray-200" />
              <div>
                <div className="font-semibold" style={{ color: '#333333' }}>Tutor: Ms. Hana</div>
                <div className="text-sm text-gray-500">IELTS Certified Instructor</div>
              </div>
            </div>
          </div>
        </div>
        <aside className="space-y-4">
          <div className="rounded-xl border border-gray-200 p-6 bg-white">
            <div className="text-2xl font-extrabold" style={{ color: '#00AEEF' }}>Rp 499,000</div>
            <div className="text-sm text-gray-500 mb-4">30-day Access</div>
            <button className="w-full px-4 py-3 rounded-lg font-semibold text-white" style={{ backgroundColor: '#00AEEF' }}>
              Buy Course
            </button>
            <p className="text-xs text-gray-500 mt-2">Payments powered by Xendit</p>
          </div>
          <div className="rounded-xl border border-gray-200 p-4 bg-[#F5F7FA] text-sm text-gray-600">
            Secure checkout with credit/debit cards, e-wallets, and bank transfer.
          </div>
        </aside>
      </div>
    </section>
  );
};

export default CourseDetail;
