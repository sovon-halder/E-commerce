import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/static/Home.jsx";
import Blog from "../components/static/Blog.jsx";
import Product from "../components/static/Product.jsx";
import About from "../components/static/About.jsx";
import Login from "../login-Signup/login.jsx";
import Signup from "../login-Signup/signUp.jsx";




const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/home",
            element:<Home />,
        },
        {
           path:"/blog",
            element:<Blog />,
        },
        {
            path:"/product",
             element:<Product />,
         },
         {
            path:"/about",
             element:<About />,
         },
         {
            path:"/login",
            element:<Login/>,
         },
         {
          path:"/signUp",
          element:<Signup/>,
         },
         

      ]
    },

  ]);

  export default router