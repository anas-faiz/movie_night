import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.webp";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearch } from "../utils/gptSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.user?.uid);

  const handleSignOut = () => {
    signOut(auth).catch(() => navigate("/error"));
  };

  const handleGtSearch = () => {
    dispatch(toggleGptSearch());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/auth");
      }
    });

    return unsubscribe;
  }, [dispatch, navigate]);

  return (
    <header className="absolute z-10 w-full flex items-center justify-between px-10">
      <Link to={loggedInUser ? "/browse" : "/"}>
        <img className="h-12 md:h-24 object-contain" src={Logo} alt="Logo" />
      </Link>

      {loggedInUser && (
        <div className="flex items-center gap-4">
          {/* GPT Button */}
          <button
            onClick={handleGtSearch}
            className="relative p-[1.5px] rounded-full 
            bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 
            hover:from-yellow-300 hover:via-amber-200 hover:to-yellow-400
            transition-all duration-300"
          >
            <span className="flex items-center justify-center 
              px-4 py-1.5 text-sm font-medium text-white 
              bg-black/40 backdrop-blur-md rounded-full">
              Search your mood
            </span>
          </button>

          {/* Logout */}
          <button
            onClick={handleSignOut}
            className="px-5 py-2 rounded-md text-sm font-medium text-white
            bg-white/10 border border-white/20 backdrop-blur-md
            hover:bg-white/20 hover:border-white/40 transition-all duration-200"
          >
            Log out
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
