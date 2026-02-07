import { useContext, useEffect, useState } from "react";
import { validate } from "../utils/validate";
import { UserContext } from "../utils/UserContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import GoogleOauth from "./GoogleOauth";
import { useAuth } from "../utils/useAuth";

function LogInForm() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { isLoginPage, setIsLoginPage } = useAuth();
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("LogInForm must be used inside UserProvider");
  }

  const { user, setUser } = userContext;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoading) return;

    const message = validate(email, password, userName, isLoginPage);
    setErrorMessage(message);
    if (message) return;

    try {
      setIsLoading(true);
      setErrorMessage(null);

      if (!isLoginPage) {
        // SIGN UP
        setUser({ ...user, username: userName });

        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        // LOG IN
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      setErrorMessage(error.code.replace("auth/", "").replace("-", " "));
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginPage = () => {
    if (isLoading) return;
    setIsLoginPage((prev) => !prev);
    setErrorMessage(null);
  };

  useEffect(() => {
    if (!errorMessage) return;

    const timer = setTimeout(() => {
      setErrorMessage(null);
    }, 2500);

    return () => clearTimeout(timer);
  }, [errorMessage]);

  return (
    <div className="relative z-10 flex items-center justify-center flex-grow px-4 mt-36">
      <form
        onSubmit={handleSubmit}
        className="bg-black/80 w-full max-w-md rounded-2xl shadow-2xl p-8 flex flex-col backdrop-blur-sm"
      >
        <h2 className="text-3xl font-extrabold text-center text-white mb-6">
          {isLoginPage ? "Log In" : "Sign Up"}
        </h2>

        {!isLoginPage && (
          <input
            disabled={isLoading}
            className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-60"
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        )}

        <input
          disabled={isLoading}
          className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-60"
          type="email"
          placeholder="Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          disabled={isLoading}
          className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-60"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {errorMessage && (
          <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="bg-red-600 mt-4 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition duration-300 shadow-md disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading && (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          )}
          {isLoginPage
            ? isLoading
              ? "Logging in..."
              : "Log In"
            : isLoading
            ? "Signing up..."
            : "Sign Up"}
        </button>

        <p className="text-sm text-gray-300 text-center mt-6">
          {isLoginPage ? "New Here?" : "Already a User?"}{" "}
          <span
            onClick={handleLoginPage}
            className="text-red-400 font-medium cursor-pointer hover:underline"
          >
            {isLoginPage ? "Sign Up" : "Log In"}
          </span>
        </p>
        <GoogleOauth/>
      </form>
      
    </div>
  );
}

export default LogInForm;
