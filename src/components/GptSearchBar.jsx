import React from 'react'

const GptSearchBar = () => {
  return (
    <div>
         {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Search Container */}
      <div className="relative z-10 w-full max-w-2xl px-6">
        
        {/* Title */}
        <h1 className="mb-6 text-center text-3xl md:text-4xl font-semibold text-white">
          Search by your mood 🎭
        </h1>

        {/* Gold Border Wrapper */}
        <div className="p-[1.5px] rounded-full 
          bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500">

          {/* Glass Input */}
          <div className="flex items-center gap-3 px-5 py-3 
            bg-black/50 backdrop-blur-md rounded-full">

            <input
              type="text"
              placeholder="Feeling happy, sad, motivated..."
              className="flex-1 bg-transparent outline-none 
              text-white placeholder-white/60 text-sm md:text-base"
            />

            {/* Search Button */}
            <button
              className="px-5 py-2 text-sm font-medium text-black
              bg-gradient-to-r from-yellow-300 to-yellow-400
              rounded-full hover:brightness-110
              transition-all duration-200 active:scale-95"
            >
              Search
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default GptSearchBar