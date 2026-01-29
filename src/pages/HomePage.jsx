import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useAuth } from "../utils/AuthContext";


function HomePage() {
  const bg_image = import.meta.env.VITE_home_background_image;
  const { setisLogInPage } = useAuth();

  const handleClick = () => {
    setisLogInPage(false);
  };

  return (
    <div
      className="relative flex flex-col w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg_image})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/70"></div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center flex-grow text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-tight">
          Welcome to <span className="text-red-500">MovieNight</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">
          Stream unlimited movies and get AI-powered recommendations tailored
          just for you.
        </p>
        <Link to="/auth">
          <button
            onClick={handleClick}
            className="mt-8 bg-red-600 text-white cursor-pointer px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-red-700 hover:scale-105 transition duration-300 ease-in-out"
          >
            Get Started
          </button>
        </Link>
      </main>
    </div>
  );
}

export default HomePage;
