import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Dashboard from "../layout/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddNewHouse from "../pages/AddNewHouse/AddNewHouse";
import EditHouse from "../pages/EditHouse/EditHouse";
import HouseDetails from "../components/HouseDetails/HouseDetails";
import OwnerBookedHouses from "../pages/OwnerBookedHouses/OwnerBookedHouses";
import MyBookedHouse from "../pages/MyBookedHouse/MyBookedHouse";
import MyListedHouses from "../pages/MyListedHouses/MyListedHouses";
import Profile from "../pages/Profile/Profile";
import Contact from "../pages/Contact/Contact";
import AboutPage from "../pages/AboutPage/AboutPage";
import Services from "../Shared/Services/Services";
import AllUsers from "../pages/AllUsers/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/myListedHouses",
        element: <MyListedHouses></MyListedHouses>,
      },
      {
        path: "/dashboard/addNewHouse",
        element: <AddNewHouse></AddNewHouse>,
      },
      {
        path: "/dashboard/allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/editHouse/:id",
        element: <EditHouse></EditHouse>,
        loader: ({ params }) =>
          fetch(
            `https://house-hunter-server-pi.vercel.app/houses/${params.id}`
          ),
      },
      {
        path: "/dashboard/houseDetails/:id",
        element: <HouseDetails></HouseDetails>,
        loader: ({ params }) =>
          fetch(
            `https://house-hunter-server-pi.vercel.app/allBookings/${params.id}`
          ),
      },
      {
        path: "/dashboard/allBookedHouses",
        element: <OwnerBookedHouses></OwnerBookedHouses>,
      },
      {
        path: "/dashboard/manageBookings",
        element: <MyBookedHouse></MyBookedHouse>,
      },
    ],
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);
export default router;

// ,
//     {
//         path: 'dashboard',
//         element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
//         children: [
//             {
//                 path: 'mydashboard',
//                 element: <MyDashboard></MyDashboard>
//             },
//             {
//                 path: 'myselectedclass',
//                 element: <MySelectedClass></MySelectedClass>
//             },
//             {
//                 path: 'myenrolledclass',
//                 element: <MyEnrolledClass></MyEnrolledClass>
//             },
//             {
//                 path: 'allusers',
//                 element: <AllUsers></AllUsers>
//             },
//             {
//                 path: 'addClass',
//                 element: <AddClass></AddClass>
//             },
//             {
//                 path: 'manageClasses',
//                 element: <ManageClasses></ManageClasses>
//             },
//             {
//                 path: 'myClasses',
//                 element: <MyClasses></MyClasses>
//             },
//             {
//                 path: 'feedback/:id',
//                 element: <Feedback></Feedback>
//             },
//             {
//                 path: 'payment',
//                 element: <Payment></Payment>
//             }
//         ]
//     },
