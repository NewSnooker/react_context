import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import PageOne from "../components/PageOne";
import PageTwo from "../components/PageTwo";
import PageTree from "../components/PageTree";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/1",
    element: <PageOne />,
  },
  {
    path: "/2",
    element: <PageTwo />,
  },
  {
    path: "/3",
    element: <PageTree />,
  },
]);
export default router;
