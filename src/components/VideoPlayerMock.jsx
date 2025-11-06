import React, { useState } from 'react';
import { PauseCircle, Play, AlertTriangle, XOctagon } from 'lucide-react';

const AssignmentBox = ({ onSubmit, attempts, failed }) => {
  const [answer, setAnswer] = useState('');
  return (
    <div className="mt-4 p-4 border rounded-lg bg-white space-y-3">
      <div className="font-semibold" style={{ color: '#333333' }}>Assignment</div>
      <p className="text-sm text-gray-600">Explain the strategy to handle IELTS Speaking Part 2 in 2-3 sentences.</p>
      <input
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring"
        placeholder="Type your answer here"
      />
      {failed && (
        <div className="flex items-center gap-2 text-sm px-3 py-2 rounded-md" style={{ backgroundColor: '#FEE2E2', color: '#ED1C24' }}>
          <AlertTriangle className="w-4 h-4" /> Incorrect answer. Try again.
        </div>
      )}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>Attempts: {attempts}/3</span>
        <button
          onClick={() => onSubmit(answer)}
          className="px-3 py-2 rounded-md text-sm font-medium text-white"
          style={{ backgroundColor: '#00AEEF' }}
        >
          Submit Answer
        </button>
      </div>
    </div>
  );
};

const TerminationModal = ({ onClose }) => (
  <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50">
    <div className="max-w-md w-full bg-white rounded-xl p-6 space-y-3 border-2" style={{ borderColor: '#ED1C24' }}>
      <div className="flex items-center gap-2 text-[#ED1C24] text-lg font-bold">
        <XOctagon className="w-5 h-5" /> Subscription Terminated
      </div>
      <p className="text-sm text-gray-700">
        Your subscription for this course has been terminated due to 3 failed attempts.
      </p>
      <button onClick={onClose} className="px-4 py-2 rounded-md text-sm font-semibold text-white" style={{ backgroundColor: '#ED1C24' }}>
        Close
      </button>
    </div>
  </div>
);

const VideoPlayerMock = () => {
  const [paused, setPaused] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [failed, setFailed] = useState(false);
  const [terminated, setTerminated] = useState(false);

  const handleAssignmentTrigger = () => {
    setPaused(true);
  };

  const handleSubmit = (val) => {
    // For demo: only answers length > 10 considered correct
    if (val && val.trim().length > 10) {
      setFailed(false);
      setPaused(false);
      setAttempts(0);
    } else {
      const a = attempts + 1;
      setAttempts(a);
      setFailed(true);
      if (a >= 3) setTerminated(true);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-3 gap-8">
        <aside className="space-y-3 lg:col-span-1">
          <div className="font-semibold" style={{ color: '#333333' }}>Course Content</div>
          <div className="rounded-xl border bg-white divide-y">
            {['Module 1', 'Module 2', 'Module 3'].map((m, i) => (
              <div key={i} className={`px-4 py-3 text-sm ${i === 0 ? 'bg-[#F5F7FA] font-medium' : ''}`}>{m}</div>
            ))}
          </div>
        </aside>
        <div className="lg:col-span-2">
          <div className="rounded-2xl overflow-hidden border bg-white">
            <div className="aspect-video bg-gray-200 relative flex items-center justify-center">
              {!paused ? (
                <button onClick={handleAssignmentTrigger} className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-white" style={{ backgroundColor: '#00AEEF' }}>
                  <PauseCircle className="w-5 h-5" /> Simulate Pause & Assignment
                </button>
              ) : (
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-white" style={{ backgroundColor: '#00AEEF' }}>
                  <Play className="w-4 h-4" /> Video paused for assignment
                </div>
              )}
            </div>
          </div>

          {paused && (
            <AssignmentBox onSubmit={handleSubmit} attempts={attempts} failed={failed} />
          )}
        </div>
      </div>

      {terminated && <TerminationModal onClose={() => setTerminated(false)} />}
    </section>
  );
};

export default VideoPlayerMock;
