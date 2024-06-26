import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./routes/Home.jsx";
import { Contact } from "./routes/Contact.jsx";
import { Products } from "./routes/Products.jsx";
import { Checkout } from "./routes/Checkout.jsx";
import { Success } from "./routes/Success.jsx";
import { SpecificProduct } from "./routes/SpecificProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/:itemId",
        element: <SpecificProduct />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
