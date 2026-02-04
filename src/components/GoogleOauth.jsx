import google from "../assets/google.svg";

const GoogleOauth = () => {
  return (
    <div className="w-full flex justify-center mt-3">
      <button
        type="button"
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
        {/* Google Icon */}
        <div className="w-5 h-5 flex items-center justify-center font-bold">
          <img src={google} alt="Google" className="w-5 h-5" />
        </div>

        <span className="text-sm">Continue with Google</span>
      </button>
    </div>
  );
};

export default GoogleOauth;
