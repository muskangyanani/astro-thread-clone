import profileIcon from '../images/me.png'
export default function CreateThread(){
  return (
    <div className='flex flex-col gap-2'>
      <div className="hidden sm:flex items-center justify-between w-[580px]">
        <div className='flex gap-2'>
          <div className="profile rounded-full h-10 w-10">
            <img src={profileIcon.src} alt="" className="rounded-full" />
          </div>
          <input
            type="text"
            className="bg-transparent placeholder:text-md text-md text-white placeholder:text-[#777777] outline-none"
            placeholder="Start a thread..."
          />
        </div>
        <button className="px-4 py-1 border bg-[#5e5e5e] text-black font-bold border-neutral-700 rounded-full">Post </button>
      </div>
      <div className='h-[1px] w-full bg-neutral-700'></div>
    </div>
  )
}