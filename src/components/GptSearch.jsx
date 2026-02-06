import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  const bg_image = import.meta.env.VITE_home_background_image;

  return (
    <div
      className="relative flex items-center justify-center w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg_image})` }}
    >
     <GptSearchBar/>
    </div>
  );
};

export default GptSearch;
