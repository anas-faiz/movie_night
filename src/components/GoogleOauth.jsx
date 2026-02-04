import { useState } from "react";
import google from "../assets/google.svg";

const GoogleOauth = () => {
  const [isloading, setIsLoading] = useState(false);

  const handleSignIn = () => {
    setIsLoading(true);

    try {
    } catch (error) {}
  };

  return (
    <div className="w-full flex justify-center mt-3">
      <button
        type="button"
        onClick={handleSignIn}
        className="
          flex items-center gap-3
          bg-white text-black
          px-6 py-3
          rounded-md
          font-medium
          shadow-md
          hover:shadow-lg
          hover:bg-gray-100
          active:scale-95
          transition-all duration-200
          focus:outline-none
          focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        "
      >
        {isloading ? (
          <>
            {/* Spinner */}
            <span className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
            <span className="text-sm">Signing in...</span>
          </>
        ) : (
          <>
            {/* Google Icon */}
            <div className="w-5 h-5 flex items-center justify-center font-bold">
              <img src={google} alt="Google" className="w-5 h-5" />
            </div>
            <span className="text-sm">Continue with Google</span>
          </>
        )}
      </button>
    </div>
  );
};

export default GoogleOauth;
