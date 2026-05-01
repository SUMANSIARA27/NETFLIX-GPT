import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef();
  const name = useRef();
  const password = useRef();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value,
    );
    setErrorMessage(message);
    if (message) return;
    // sign in and sign up logic
    if (!isSignInForm) {
      // sign up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              
            })
            .catch((error) => {
               console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
  };
  return (
    <div className="relative">
      <Header />

      {/* Background image */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fbfbf920-aae8-4f40-95f7-28cd7910f1e8/web/IN-en-20260427-TRIFECTA-perspective_5f59ca49-2de3-4727-9fdd-2aad23de56c8_large.jpg"
        alt=""
        className="w-full h-screen object-cover"
      />

      {/* Centered form overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black/80 text-white w-3/12 p-12 rounded-md">
          <h1 className="text-3xl font-bold mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4"
          >
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Name"
                className="p-3 rounded bg-zinc-800 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-red-600 border border-zinc-700"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email"
              className="p-3 rounded bg-zinc-800 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-red-600 border border-zinc-700"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-3 rounded bg-zinc-800 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-red-600 border border-zinc-700"
            />
            <p className="font-bold text-red-500">{errorMessage}</p>
            <button
              onClick={handleButtonClick}
              className="bg-red-600 hover:bg-red-700 text-white py-3 rounded font-bold mt-2 transition-colors cursor-pointer"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="cursor-pointer" onClick={toggleSignInForm}>
              {isSignInForm
                ? "New to Netflix ? Sign Up now"
                : "Already registered | Sign In"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
