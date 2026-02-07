import { useRef, useState } from "react";
import client from "../utils/openai";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    const query = searchText.current.value.trim();
    if (!query) return;

    try {
      setLoading(true);

      const response = await client.responses.create({
        model: "gpt-5",
        input: `Suggest movies based on this mood: ${query}`,
      });

      console.log(response.output_text);
    } catch (error) {
      console.error("GPT Search failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Search Container */}
      <div className="relative z-10 w-full max-w-2xl px-6 mx-auto">
        <h1 className="mb-6 text-center text-3xl md:text-4xl font-semibold text-white">
          Search by your mood 🎭
        </h1>

        {/* Gold Border */}
        <div className="p-[1.5px] rounded-full bg-linear-to-r from-yellow-400 via-amber-300 to-yellow-500">
          <div className="flex items-center gap-3 px-5 py-3 bg-black/50 backdrop-blur-md rounded-full">
            <input
              ref={searchText}
              type="text"
              placeholder="Feeling happy, sad, motivated..."
              className="flex-1 bg-transparent outline-none text-white placeholder-white/60"
            />

            <button
              onClick={handleSearch}
              disabled={loading}
              className="px-5 py-2 text-sm font-medium text-black
              bg-linear-to-r from-yellow-300 to-yellow-400
              rounded-full hover:brightness-110
              transition-all duration-200 active:scale-95 disabled:opacity-60"
            >
              {loading ? "Thinking..." : "Search"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GptSearchBar;
