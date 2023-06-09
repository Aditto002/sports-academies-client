import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Home/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import ErrorPage from "../components/errorpage/ErrorPage";
import Allinstructor from "../pages/Allinstructor/Allinstructor";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
          path:"/instructor",
          element:<Allinstructor></Allinstructor>
        }
      ]
    },
    {
        path:"*",
        element:<ErrorPage></ErrorPage>
    }
  ]);
  export default router;