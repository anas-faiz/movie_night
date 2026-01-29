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
  const loggedInUser = useSelector((state) => state.user?.uid);

  const handleCLick = () => setisLogInPage(true);
  const resetContext = () => setisLogInPage(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/auth"))
      .catch(() => navigate("/error"));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <header className="relative z-10 w-full flex items-center justify-between px-10 py-6">
      <Link onClick={resetContext} to="/">
        <img className="h-12 md:h-24 object-contain" src={Logo} alt="Logo" />
      </Link>

      {loggedInUser ? (
        <button onClick={handleSignOut} className="bg-red-600 px-5 py-2 rounded-lg text-white">
          Log out
        </button>
      ) : (
        <Link to="/auth">
          <button onClick={handleCLick} className="bg-red-600 px-5 py-2 rounded-lg text-white">
            Log In
          </button>
        </Link>
      )}
    </header>
  );
}

export default Header