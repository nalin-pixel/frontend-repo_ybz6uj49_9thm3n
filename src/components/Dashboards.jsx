import React from 'react';
import { BarChart2, Users, BookOpenCheck, CheckCircle2, XCircle } from 'lucide-react';

const Stat = ({ label, value, color }) => (
  <div className="rounded-xl p-5 bg-white border border-gray-100 shadow-sm">
    <div className="text-sm text-gray-500">{label}</div>
    <div className="mt-2 text-2xl font-extrabold" style={{ color }}>{value}</div>
  </div>
);

const ProgressBar = ({ value }) => (
  <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
    <div className="h-full rounded-full" style={{ width: `${value}%`, backgroundColor: '#39B54A' }} />
  </div>
);

const StudentDashboard = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-bold" style={{ color: '#333333' }}>Welcome back, Aisyah!</h3>
    <div className="grid sm:grid-cols-3 gap-4">
      <Stat label="Active Courses" value="3" color="#00AEEF" />
      <Stat label="Assignments Due" value="1" color="#ED1C24" />
      <Stat label="Completed Lessons" value="24" color="#39B54A" />
    </div>
    <div className="rounded-xl border border-gray-100 bg-white p-4">
      <div className="font-semibold mb-3" style={{ color: '#333333' }}>My Courses</div>
      <div className="grid md:grid-cols-3 gap-4">
        {[64, 32, 90].map((p, i) => (
          <div key={i} className="rounded-lg border p-4">
            <div className="aspect-video rounded-md bg-gray-100 mb-3" />
            <div className="font-medium text-gray-800">Course {i + 1}</div>
            <div className="mt-2"><ProgressBar value={p} /></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TutorDashboard = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-bold flex items-center gap-2" style={{ color: '#333333' }}>
      <BarChart2 className="w-5 h-5 text-gray-400" /> Tutor Overview
    </h3>
    <div className="grid sm:grid-cols-3 gap-4">
      <Stat label="Total Students" value="128" color="#00AEEF" />
      <Stat label="Earnings (MoM)" value="Rp 8.5M" color="#39B54A" />
      <Stat label="Active Courses" value="4" color="#333333" />
    </div>
    <div className="rounded-xl border border-gray-100 bg-white p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="font-semibold" style={{ color: '#333333' }}>My Courses</div>
        <button className="px-3 py-2 rounded-md text-sm font-medium text-white" style={{ backgroundColor: '#00AEEF' }}>
          Create New Course
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-left text-gray-500">
            <tr>
              <th className="py-2 pr-4">Course</th>
              <th className="py-2 pr-4">Students</th>
              <th className="py-2 pr-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {[
              { name: 'IELTS Speaking', students: 64, status: 'Published' },
              { name: 'IELTS Writing 7+', students: 38, status: 'Draft' },
            ].map((c, i) => (
              <tr key={i} className="border-t">
                <td className="py-2 pr-4">{c.name}</td>
                <td className="py-2 pr-4">{c.students}</td>
                <td className="py-2 pr-4">{c.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const AdminDashboard = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-bold flex items-center gap-2" style={{ color: '#333333' }}>
      <Users className="w-5 h-5 text-gray-400" /> Admin Control Panel
    </h3>
    <div className="grid sm:grid-cols-3 gap-4">
      <Stat label="Total Revenue" value="Rp 120M" color="#00AEEF" />
      <Stat label="New Signups" value="342" color="#39B54A" />
      <Stat label="Total Courses" value="28" color="#333333" />
    </div>
    <div className="rounded-xl border border-gray-100 bg-white p-4">
      <div className="font-semibold mb-3" style={{ color: '#333333' }}>User Management</div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-left text-gray-500">
            <tr>
              <th className="py-2 pr-4">Name</th>
              <th className="py-2 pr-4">Role</th>
              <th className="py-2 pr-4">Status</th>
              <th className="py-2 pr-4">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {[
              { name: 'Aisyah', role: 'Student', status: 'Active' },
              { name: 'Hana', role: 'Tutor', status: 'Active' },
              { name: 'Rafi', role: 'Student', status: 'Inactive' },
            ].map((u, i) => (
              <tr key={i} className="border-t">
                <td className="py-2 pr-4">{u.name}</td>
                <td className="py-2 pr-4">{u.role}</td>
                <td className="py-2 pr-4">{u.status}</td>
                <td className="py-2 pr-4">
                  <button className="px-3 py-1 rounded-md text-xs font-medium text-white" style={{ backgroundColor: '#00AEEF' }}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <button className="px-4 py-2 rounded-md text-sm font-semibold text-white" style={{ backgroundColor: '#00AEEF' }}>
          Create New Tutor Account
        </button>
      </div>
    </div>

    <div className="rounded-xl border border-gray-100 bg-white p-4">
      <div className="font-semibold mb-2" style={{ color: '#333333' }}>Status Colors</div>
      <div className="flex items-center gap-4 text-sm">
        <span className="inline-flex items-center gap-1 text-[#39B54A]"><CheckCircle2 className="w-4 h-4" /> Success</span>
        <span className="inline-flex items-center gap-1 text-[#ED1C24]"><XCircle className="w-4 h-4" /> Error</span>
        <span className="inline-flex items-center gap-1 text-[#00AEEF]"><BookOpenCheck className="w-4 h-4" /> Primary</span>
      </div>
    </div>
  </div>
);

const Dashboards = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-10">
        <StudentDashboard />
        <TutorDashboard />
      </div>
      <div>
        <AdminDashboard />
      </div>
    </section>
  );
};

export default Dashboards;
