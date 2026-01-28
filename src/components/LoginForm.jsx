import { useContext, useEffect, useState} from "react";
import { validate } from "../utils/validate";
import { UserContext } from "../utils/UserContext";
import { useAuth } from "../utils/AuthContext";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../utils/firebase";

function LogInForm() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  
  const { islogInPage, setisLogInPage } = useAuth();

  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("LogInForm must be used inside UserProvider");
  }

  const { user, setUser } = userContext;

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = validate(email, password, userName, islogInPage);
    setErrorMessage(message);

    if(message) return;

    if (!islogInPage) {
      //sign up logic
      setUser({
        ...user,
        username: userName,
      });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed up 
          const user = userCredential.user;
          
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        setErrorMessage(errorCode + "-" + errorMessage)
      });
    }else{

     signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in 
        const user = userCredential.user;
        //console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage)
    });
    }
  };

  const handleLoginPage = () => {
    setisLogInPage((prev) => !prev);
  };

  useEffect(()=>{
    setTimeout(()=>{
      setErrorMessage(null)
    },2000)
  },[errorMessage])

  return (
    <div>
      <div className="relative z-10 flex items-center justify-center flex-grow px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-black/80 w-full max-w-md rounded-2xl shadow-2xl p-8 flex flex-col backdrop-blur-sm"
        >
          <h2 className="text-3xl font-extrabold text-center text-white mb-6">
            {islogInPage ? "Log In" : "Sign Up"}
          </h2>

          {!islogInPage && (
            <input
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          )}

          <input
            className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {errorMessage && (
            <p className="text-red-600 text-sm">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="bg-red-600 mt-4 text-white font-semibold py-2 rounded-lg cursor-pointer hover:bg-red-700 transition duration-300 shadow-md"
          >
            {islogInPage ? "Log In" : "Sign Up"}
          </button>

          <p className="text-sm text-gray-300 text-center mt-6">
            {islogInPage ? "New Here?" : "Already a User?"}{" "}
            <span
              onClick={handleLoginPage}
              className="text-red-400 font-medium cursor-pointer hover:underline"
            >
              {islogInPage ? "Sign Up" : "Log In"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LogInForm;
