import profilePic from '../images/me.png'
import photoIcon from '../images/photos.png'
import gifIcon from '../images/gif.png'
import menuIcon from '../images/menuR.png'

export default function CreateThreadModal(){
  return (
    <div id="modal-overlay" className="fixed inset-0 z-50 hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
      <h1 className="text-white font-bold text-center hidden sm:block p-3">
        New thread
      </h1>
      <div
        className="bg-[#181818] w-full h-full sm:w-[590px] sm:h-fit sm:rounded-2xl p-3 sm:p-5 text-white border border-neutral-700 ease-in-out transition duration-500"
      >
        <div className="flex gap-8 justify-between sm:hidden">
          <button>Cancle</button>
          <h2 className="font-bold text-lg">New Thread</h2>
        </div>
        <div className="flex flex-col gap-2">
          <div className="mt-6 flex gap-2 sm:mt-0">
            <img
              className="rounded-full border border-neutral-700 w-12"
              src={profilePic.src}
              alt="profile pic"
            />
            <div>
              <p className="font-bold">muskaann.29</p>
              <input
                type="text"
                className="bg-transparent placeholder:text-sm text-sm placeholder:text-[#777777] outline-none"
                placeholder="Start a thread..."
              />
            </div>
          </div>
          <div className="flex gap-4 ml-5">
            <div className="line bg-neutral-600 h-10 w-[2px] rounded"></div>
            <div className="flex items-center gap-4 ml-3">
              <img src={photoIcon.src} alt="" className="w-6 h-6" />
              <img src={gifIcon.src} alt="" className="w-6 h-6" />
              <p className="text-xl text-[#737373]">#</p>
              <img src={menuIcon.src} alt="" className="w-6 h-6" />
            </div>
          </div>
          <div className="flex gap-4 ml-2">
            <img
              className="rounded-full border border-neutral-700 w-6"
              src={profilePic.src}
              alt="profile pic"
            />
            <button className="text-[#3E3E3E] bg-transparent outline-none"
              >Add to Thread</button
            >
          </div>
        </div>
        <div
          className="bottom-2 right-0 flex items-center justify-between absolute w-full px-4 py-2 sm:relative sm:mt-8 sm:p-0"
        >
          <div className="relative">
            <button id="dropdownButton" className="text-[#777777]">
              Anyone can reply
            </button>
            <div
              id="dropdown"
              className="hidden absolute left-0 bottom-6 sm:top-6 w-48 text-white font-bold shadow-md py-2"
            >
              <div
                className="border border-neutral-600 w-48 bg-[#181818] rounded-xl"
              >
                <a href="#" className="block px-5 py-2">Anyone</a>
                <div className="bg-neutral-700 h-[1px] w-full"></div>
                <a href="#" className="block px-5 py-2">Profile you follow</a>
                <div className="bg-neutral-700 h-[1px] w-full"></div>
                <a href="#" className="block px-5 py-2">Mentioned only</a>
              </div>
            </div>
          </div>
          <button
            className="px-6 py-1 border bg-[#5e5e5e] text-black border-neutral-700 rounded-full"
            >Post</button
          >
        </div>
      </div>
    </div>
  </div>
  )
}