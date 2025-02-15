import { useRef, useState ,useCallback} from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  
} from "firebase/auth";
import validators from "../utils/validate";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    firebase: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();

    // Reset errors
    setErrors({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      firebase: "",
    });

    // Get values from inputs
    const emailValue = emailRef.current?.value.trim() || "";
    const passwordValue = passwordRef.current?.value.trim() || "";
    const firstNameValue = firstNameRef.current?.value.trim() || "";
    const lastNameValue = lastNameRef.current?.value.trim() || "";

    let isValid = true;
    let newErrors = {};

    // Email validation
    if (!validators.validateEmail(emailValue)) {
      newErrors.email = "Invalid email format.";
      isValid = false;
    }

    // Password validation
    if (!validators.validatePassword(passwordValue)) {
      newErrors.password =
        "Password must be at least 8 characters long and include at least one number and one special character.";
      isValid = false;
    }

    // If signing up, validate first and last names
    if (!signIn) {
      if (!firstNameValue) {
        newErrors.firstName = "First name is required.";
        isValid = false;
      }
      if (!lastNameValue) {
        newErrors.lastName = "Last name is required.";
        isValid = false;
      }
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    try {
      let userCredential;
      if (signIn) {
        // Sign in existing user
        userCredential = await signInWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue
        );
      } else {
        // Sign up new user
        userCredential = await createUserWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue
        );

        // Update profile with first and last name
        await userCredential.user.updateProfile({
          displayName: `${firstNameValue} ${lastNameValue}`,
        });
      }

      // Dispatch user to Redux store
      dispatch(addUser(userCredential.user));

      // Navigate to /search after successful login/signup
      navigate("/search");
    } catch (error) {
      setErrors((prev) => ({ ...prev, firebase: error.message }));
    }
  }

  const toggleChange = useCallback(() => {
    setSignIn((prev) => !prev);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="absolute w-full h-full">
        <img
          className="w-full h-full object-cover brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"
          alt="Background"
        />
      </div>

      <form
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   bg-black/50 p-12 rounded-lg w-104"
        onSubmit={handleSubmit}
      >
        <h1 className="text-white text-3xl font-bold mb-8">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>

        {!signIn && (
          <>
            <input
              ref={firstNameRef}
              className="w-full bg-gray-700 text-white p-4 my-2 rounded-md"
              type="text"
              placeholder="First Name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}

            <input
              ref={lastNameRef}
              className="w-full bg-gray-700 text-white p-4 my-2 rounded-md"
              type="text"
              placeholder="Last Name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </>
        )}

        <input
          ref={emailRef}
          className="w-full bg-gray-700 text-white p-4 my-2 rounded-md"
          type="email"
          placeholder="Enter Email"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <input
          ref={passwordRef}
          className="w-full bg-gray-700 text-white p-4 my-2 rounded-md"
          type="password"
          placeholder="Enter Password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}

        {errors.firebase && (
          <p className="text-red-500 text-sm">{errors.firebase}</p>
        )}

        <button
          className="w-full bg-red-600 text-white py-2 mt-6 rounded-md 
                     hover:bg-red-700 font-bold transition duration-200"
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-white text-center m-4">Or</p>

        <button
          type="button"
          onClick={toggleChange}
          className="w-full bg-gray-600 text-white py-2 mt-3 rounded-md 
                     hover:bg-red-700 font-bold transition duration-200"
        >
          {signIn ? "Sign Up" : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Login;
