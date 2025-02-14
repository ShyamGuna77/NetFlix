import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [signIn, setSignIn] = useState(true);

    function handleSubmit(event) {
        event.preventDefault();
    }

    function togglechange() {
        setSignIn(!signIn);
    }

    return (
        <div className="relative min-h-screen ">
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
                                bg-black/50 p-12 rounded-lg w-96"
                onSubmit={handleSubmit}
            >
                <h1 className="text-white text-3xl font-bold mb-8">
                    {signIn ? "Sign In" : "Sign Up"}
                </h1>
                {!signIn && (
                    <>
                        <input
                            className="w-full bg-gray-700 text-white p-4 my-4 rounded-md 
                                        focus:outline-none focus:ring-2 focus:ring-red-600"
                            type="text"
                            placeholder="First Name"
                            id="firstName"
                        />
                        <input
                            className="w-full bg-gray-700 text-white p-4 my-4 rounded-md 
                                        focus:outline-none focus:ring-2 focus:ring-red-600"
                            type="text"
                            placeholder="Last Name"
                            id="lastName"
                        />
                    </>
                )}
                <input
                    className="w-full bg-gray-700 text-white p-4 my-4 rounded-md 
                                        focus:outline-none focus:ring-2 focus:ring-red-600"
                    type="text"
                    placeholder="Enter Email"
                    id="email"
                />
                <input
                    className="w-full bg-gray-700 text-white p-4 my-4 rounded-md 
                                        focus:outline-none focus:ring-2 focus:ring-red-600"
                    type="password"
                    placeholder="Enter Password"
                    id="password"
                />
                <button
                    className="w-full bg-red-600 text-white py-2 mt-6 rounded-md 
                                        hover:bg-red-700 font-bold transition duration-200"
                >
                    {signIn ? "Sign In" : "Sign Up"}
                </button>
                <p className="text-white text-center m-4">Or</p>
                <button
                    onClick={togglechange}
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
