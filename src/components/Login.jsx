import { useRef, useState } from "react";
import Header from "./Header";
import validators from "../utils/validate";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");
    setFirstNameError("");
    setLastNameError("");

    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const firstNameValue = firstName.current ? firstName.current.value : "";
    const lastNameValue = lastName.current ? lastName.current.value : "";

    let isValid = true;

    // Validate email
    if (!validators.validateEmail(emailValue)) {
      setEmailError("Invalid email format.");
      isValid = false;
    }

   
    if (!validators.validatePassword(passwordValue)) {
      setPasswordError(
        "Password must be at least 8 characters long and include at least one number and one special character."
      );
      isValid = false;
    }

   
    if (!signIn) {
      if (firstNameValue.trim() === "") {
        setFirstNameError("First name is required.");
        isValid = false;
      }
      if (lastNameValue.trim() === "") {
        setLastNameError("Last name is required.");
        isValid = false;
      }
    }

    if (isValid) {
      console.log("Form submitted successfully!");
    }
  }

  function toggleChange() {
    setSignIn(!signIn);
  }

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="absolute w-full h-full">
        <img
          className="w-full h-full object-cover brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"
          alt="Background asset"
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
              ref={firstName}
              className="w-full bg-gray-700 text-white p-4 my-2 rounded-md 
                                        focus:outline-none focus:ring-2 focus:ring-red-600"
              type="text"
              placeholder="First Name"
            />
            {firstNameError && (
              <p className="text-red-500 text-sm">{firstNameError}</p>
            )}

            <input
              ref={lastName}
              className="w-full bg-gray-700 text-white p-4 my-2 rounded-md 
                                        focus:outline-none focus:ring-2 focus:ring-red-600"
              type="text"
              placeholder="Last Name"
            />
            {lastNameError && (
              <p className="text-red-500 text-sm">{lastNameError}</p>
            )}
          </>
        )}

        <input
          ref={email}
          className="w-full bg-gray-700 text-white p-4 my-2 rounded-md 
                                        focus:outline-none focus:ring-2 focus:ring-red-600"
          type="email"
          placeholder="Enter Email"
        />
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

        <input
          ref={password}
          className="w-full bg-gray-700 text-white p-4 my-2 rounded-md 
                                        focus:outline-none focus:ring-2 focus:ring-red-600"
          type="password"
          placeholder="Enter Password"
        />
        {passwordError && (
          <p className="text-red-500 text-sm">{passwordError}</p>
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
          className="w-full bg-[#362F2D] text-white py-2 mt-3 rounded-md 
                                        hover:bg-red-700 font-bold transition duration-200"
        >
          {signIn ? "Sign Up" : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Login; 
