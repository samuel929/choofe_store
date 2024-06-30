import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Pages/Cart/Cart.tsx";
import Description from "./Pages/Description/Description.tsx";
import Navigation from "./components/Navigation/Navigation.tsx";
import Profile from "./Pages/Profile/Profile.tsx";
import Admin from "./Pages/Admin/Admin.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/description",
        element: <Description />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className='root'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
