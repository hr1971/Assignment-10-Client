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
import UpdatePartner from "../../Pages/UpdatePartner";
import ErrorPage from "../../Pages/ErrorPage";
import Profile from "../../Pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("http://localhost:5000/top-students"),
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
        loader: () => fetch("http://localhost:5000/students"),
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
      },
      {
        path: "/update-partner/:id",
        element: (
          <PrivateRoute>
            <UpdatePartner />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/request/${params.id}`),
      },
      {
        path:'/profile',
        element:<Profile></Profile>
      }
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
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);
