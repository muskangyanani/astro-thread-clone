import { useState, useEffect } from "react";

export default function Activities() {

  return (
      <div className="text-white flex overflow-scroll p-1 gap-3 font-bold sm:w-[90%] lg:justify-center lg:overflow-hidden">
        <button className="px-10 py-1 border border-neutral-700 rounded-xl focus:bg-white focus:text-black">
          All
        </button>
        <button class="px-6 py-1 border border-neutral-700 rounded-xl focus:bg-white focus:text-black">
        Follows
      </button>
      <button class="px-6 py-1 border border-neutral-700 rounded-xl focus:bg-white focus:text-black">
        Replies
      </button>
      <button class="px-6 py-1 border border-neutral-700 rounded-xl focus:bg-white focus:text-black">
        Mentions
      </button>
      <button class="px-6 py-1 border border-neutral-700 rounded-xl focus:bg-white focus:text-black">
        Quotes
      </button>
      <button class="px-6 py-1 border border-neutral-700 rounded-xl focus:bg-white focus:text-black">
        Reposts
      </button>
      <button class="px-6 py-1 border border-neutral-700 rounded-xl focus:bg-white focus:text-black">
        Verified
      </button>
    </div>
  );
}



