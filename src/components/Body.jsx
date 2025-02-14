import { createBrowserRouter, RouterProvider } from "react-router"
import Login from "./Login"
import Search from "./Search"
const Body = () => {
  

    const approuter = createBrowserRouter([
        {
            path : "/",
            element :<Login />
        },
        {
            path: "/search",
            element:<Search />
        }
    ])

  return (
    <div>
   <RouterProvider router={approuter} />
    </div>
  )
}

export default Body