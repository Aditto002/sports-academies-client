import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Home/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import ErrorPage from "../components/errorpage/ErrorPage";
import Allinstructor from "../pages/Allinstructor/Allinstructor";
import Dashboart from "../Layout/Dashboart";
import MyStudent from "../pages/Dashboarts/MyStudent";
import AllUsers from "../pages/Dashboarts/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";
import AddSport from "../pages/Dashboarts/AddSport/AddSport";
import ManageItems from "../pages/Dashboarts/ManageItems/ManageItems";
import Payment from "../pages/Dashboarts/Payment/Payment";

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
      path:'Dashborart',
      element: <PrivateRoute><Dashboart></Dashboart></PrivateRoute>,
      children:[
         {
          path:'mystudent',
          element:<MyStudent></MyStudent>
         },
         {
          path:'allusers',
          element:<AllUsers></AllUsers>
         },
         {
          path:'addsport',
          element:<AddSport></AddSport>
         },
         {
          path:"menagesports",
          element:<ManageItems></ManageItems>
         },
         {
          path:"payment",
          element:<Payment></Payment>
         }
      ]
    },
    {
        path:"*",
        element:<ErrorPage></ErrorPage>
    },
    
  ]);
  export default router;