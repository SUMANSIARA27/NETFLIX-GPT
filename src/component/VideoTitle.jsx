const VideoTitle = ({ title, description }) => {
  return (
    <div className="pt-[20%] px-24 absolute w-screen aspect-video text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/3 py-6 text-lg">{description}</p>
      <div className="flex items-center gap-3">

        {/* ✅ Play Button */}
        <button className="flex items-center gap-2 bg-white hover:bg-white/80 text-black font-semibold text-lg py-3 px-8 rounded-md transition-all duration-200 cursor-pointer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="black">
            <polygon points="5,3 19,12 5,21" />
          </svg>
          Play
        </button>

        {/* ✅ More Info Button */}
        <button className="flex items-center gap-2 bg-gray-500/70 hover:bg-gray-500/90 text-white font-semibold text-lg py-3 px-8 rounded-md transition-all duration-200 cursor-pointer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <circle cx="12" cy="16" r="1.2" fill="white" />
          </svg>
          More Info
        </button>

      </div>
    </div>
  );
};

export default VideoTitle;