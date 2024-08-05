import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ProductProvider } from "./context/ProductContext.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/root.jsx";
import { CartProvider } from "./context/CartContext.jsx";

document.title = "React Context";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>
);
