import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../../Pages/Home";
import FindPartners from "../../Pages/FindPartners";
import Login from "../../Authenticaton/Login";
import Register from "../../Authenticaton/Register";
import CreatePartner from "../../Pages/CreatePartner";
import MyConnections from "../../Pages/MyConnections";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path:'/',
        element: <Home />,
      },
      {
        path:'/find-partners',
        element:<FindPartners />,
      },
      {
        path:'/create-partner',
        element:<CreatePartner />,
      },
      {
        path:'/my-connections',
        element:<MyConnections />,
      },
      
    ],
    
  },
  {
        path:'/auth/login',
        element:<Login />,
      },
      {
        path:'/auth/register',
        element:<Register />,
      }
]);