import React, { useState } from 'react';
import TopNav from './components/TopNav';
import PublicAuth from './components/PublicAuth';
import CourseDetail from './components/CourseDetail';
import Dashboards from './components/Dashboards';
import VideoPlayerMock from './components/VideoPlayerMock';

function App() {
  const [view, setView] = useState('public');

  return (
    <div className="min-h-screen bg-white">
      <TopNav currentView={view} onSelect={setView} />

      {view === 'public' && (
        <>
          <PublicAuth />
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#333333' }}>Discover Courses</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="aspect-video bg-gray-100" />
                  <div className="p-4">
                    <div className="font-semibold" style={{ color: '#333333' }}>IELTS Speaking Masterclass</div>
                    <div className="text-sm text-gray-500">Tutor: Ms. Hana</div>
                    <div className="mt-2 text-sm flex items-center justify-between">
                      <span className="font-semibold" style={{ color: '#00AEEF' }}>Rp 499,000</span>
                      <span className="text-gray-500">/ 30-day Access</span>
                    </div>
                    <button onClick={() => setView('course')} className="mt-3 w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white" style={{ backgroundColor: '#00AEEF' }}>
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {view === 'course' && (
        <>
          <CourseDetail />
          <VideoPlayerMock />
        </>
      )}

      {view === 'dashboards' && <Dashboards />}

      <footer className="mt-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-500">
          © {new Date().getFullYear()} TIME Language Centre — Learn with confidence.
        </div>
      </footer>
    </div>
  );
}

export default App;
