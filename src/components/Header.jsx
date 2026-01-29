import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.webp";
import { useAuth } from "../utils/AuthContext";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { signOut } from "firebase/auth";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { islogInPage, setisLogInPage } = useAuth();
  const loggedInUser = useSelector((state) => state.user);

  const handleCLick = () => {
    setisLogInPage(true);
  };
  const resetContext = () => {
    setisLogInPage(false);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <header className="relative z-10 w-full flex items-center justify-between px-10 py-6">
      <Link onClick={resetContext} to="/">
        <img
          className="h-12 md:h-24 object-contain drop-shadow-lg"
          src={Logo}
          alt="Logo"
        />
      </Link>
      {loggedInUser ? (
        <button
          onClick={handleSignOut}
          className="bg-red-600 text-white cursor-pointer px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-red-700 hover:scale-105 transition duration-300 ease-in-out"
        >
          Log out
        </button>
      ) : !islogInPage ? (
        <Link to="/auth">
          <button
            onClick={handleCLick}
            className="bg-red-600 text-white cursor-pointer px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-red-700 hover:scale-105 transition duration-300 ease-in-out"
          >
            Log In
          </button>
        </Link>
      ) : null}
    </header>
  );
}

export default Header;
