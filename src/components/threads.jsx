import { useState } from "react";

export default function Threads() {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabToggle = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <div className="h-80">
      <div className="mt-7 flex items-center justify-around w-full font-bold text-md text-neutral-700">
        <button
          onClick={() => handleTabToggle('createThread')}
          className={`w-full text-center text-md py-2 cursor-pointer ${activeTab === 'createThread' ? 'focus:text-white focus:border-b focus:border-white transition-colors' : 'default:text-white'}`}
        >
          Threads
        </button>
        <button
          onClick={() => handleTabToggle('replies')}
          className={`w-full text-center text-md py-2 cursor-pointer ${activeTab === 'replies' ? 'focus:text-white focus:border-b focus:border-white transition-colors' : 'default:text-white'}`}
        >
          Replies
        </button>
        <button
          onClick={() => handleTabToggle('repost')}
          className={`w-full text-center text-md py-2 cursor-pointer ${activeTab === 'repost' ? 'focus:text-white focus:border-b focus:border-white transition-colors' : 'default:text-white'}`}
        >
          Repost
        </button>
      </div>
      <div className="w-full h-[.1px] bg-neutral-700"></div>
      <div className="h-full flex items-center justify-center">
        {activeTab === 'createThread' && (
          <div className="w-full h-60 flex items-center justify-center md:h-80">
            <button
              className="px-4 py-2 font-bold text-sm text-white border border-neutral-700 rounded-xl"
            >
              Start your first thread
            </button>
          </div>
        )}
        {activeTab === 'replies' && (
          <p className="text-sm text-neutral-700 text-center">No Replies yet.</p>
        )}
        {activeTab === 'repost' && (
          <p className="text-sm text-neutral-700 text-center">No Reposts yet.</p>
        )}
      </div>
    </div>
  );
}
