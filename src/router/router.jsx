import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AddService from "../pages/AddService";
import BookedServices from "../pages/BookedServices";
import ServiceToDo from "../pages/ServiceToDo";
import Services from './../components/Services';
import ServiceDetails from './../components/ServiceDetails';
import ManageService from './../pages/ManageService';
import PrivateRoutes from "./PrivateRoutes";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/add-service",
        element: (
          <PrivateRoutes>
            <AddService />
          </PrivateRoutes>
        ),
      },
      {
        path: "/manage-services",
        element: (
          <PrivateRoutes>
            <ManageService />
          </PrivateRoutes>
        ),
      },
      {
        path: "/booked-services",
        element: (
          <PrivateRoutes>
            <BookedServices />
          </PrivateRoutes>
        ),
      },
      {
        path: "/service-to-do",
        element: (
          <PrivateRoutes>
            <ServiceToDo />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
