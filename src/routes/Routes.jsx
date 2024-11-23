import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/home",
            element:"<Home></Home>"
        },
        {
           path:"/blog",
            element:"<Blog></Blog>"
        },
        {
            path:"/product",
             element:"<Product></Product>"
         },
         {
            path:"/about",
             element:"<About></About>"
         },


      ]
    },

  ]);

  export default router