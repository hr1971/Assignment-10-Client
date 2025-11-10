import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../../Pages/Home";
import FindPartners from "../../Pages/FindPartners";
import Login from "../../Authenticaton/Login";
import Register from "../../Authenticaton/Register";
import CreatePartner from "../../Pages/CreatePartner";
import MyConnections from "../../Pages/MyConnections";
import PrivateRoute from "./PrivateRoute";
import PartnerDetails from "../../Pages/PartnerDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/create-partner",
        element: (
          <PrivateRoute>
            <CreatePartner />
          </PrivateRoute>
        ),
      },
      {
        path: "/find-partners",
        element: <FindPartners />,
       loader: () => fetch('http://localhost:5000/students') 
      },

      {
        path: "/my-connections",
        element: (
          <PrivateRoute>
            <MyConnections />
          </PrivateRoute>
        ),
      },
      {
        path: "/partner-details/:id",
        element: (
          <PrivateRoute>
            <PartnerDetails />
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`http://localhost:5000/students/${params.id}`)
      },
    ],
  },

  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
]);
