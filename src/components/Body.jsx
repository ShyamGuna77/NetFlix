import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Search from "./Search";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/UserSlice";


const approuter = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/search", element: <Search /> },
]);

const Body = () => {
  const dispatch = useDispatch();
  // In Body.jsx
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
};

export default Body;
