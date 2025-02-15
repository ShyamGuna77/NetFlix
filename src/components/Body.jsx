import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Search from "./Search";



const approuter = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/search", element: <Search /> },
]);

const Body = () => {

  // In Body.jsx
 
  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
};

export default Body;
