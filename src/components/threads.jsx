import React, { useState } from "react";

export default function Threads() {
  const [createThread, setCreateThread] = useState(false);
  const [replies, setReplies] = useState(false);
  const [repost, setRepost] = useState(false);

  const handleCreateThread = () => {
    setCreateThread(!createThread);
    setReplies(false);
    setRepost(false);
  } 
  const handleReplies = () => {
    setReplies(!replies);
    setCreateThread(false);
    setRepost(false)
  }
  const handleRepost = () => {
    setRepost(!repost);
    setCreateThread(false);
    setReplies(false);
  }

  
  return (
    <div className=" h-80">
      <div className="mt-7 flex items-center justify-around w-full font-bold text-md text-neutral-700">
        <button
          onClick={handleCreateThread}
          className="w-full text-center text-md py-2 cursor-pointer focus:text-white focus:border-b focus:border-white transition-colors"
        >
          Threads
        </button>
        <button
        onClick={handleReplies}
          className="w-full text-center text-md py-2 cursor-pointer default:text-white focus:text-white focus:border-b focus:border-white transition-colors"
        >
          Replies
        </button>
        <button
          onClick={handleRepost}
          className="w-full text-center text-md py-2 cursor-pointer focus:text-white focus:border-b focus:border-white transition-colors"
        >
          Repost
        </button>
      </div>
      <div className="w-full h-[.1px] bg-neutral-700"></div>
      <div className="h-full flex items-center justify-center">
      {createThread && (
        <div className="w-full h-60 flex items-center justify-center md:h-80">
            <button
              className="px-4 py-2 font-bold text-sm text-white border border-neutral-700 rounded-xl"
            >
              Start your first thread
            </button>
        </div>
      )}
      {replies && (<p className="text-sm text-neutral-700 text-center">No Replies yet.</p>)}
      {repost && (<p className="text-sm text-neutral-700 text-center">No Reposts yet.</p>)}
      </div>
    </div>
  );
}
