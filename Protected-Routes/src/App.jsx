import { createBrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import About from "./components/About";
import ProtectedRoute from "./components/ProtectedRoute";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/dashboard",
        element: <ProtectedRoute element={<Dashboard />} />,
      },
      {
        path: "/settings",
        element: <ProtectedRoute element={<Settings />} />,
      },

      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
