import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/static/Blog";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/blog",
            element:"<Blog></Blog>"
        }
      ]
    },

  ]);

  export default router