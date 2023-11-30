import { createBrowserRouter } from "react-router-dom";

// import App from "../../App";
import HomepageLayOut from "../../Layout/HomeLayOut/HomepageLayOut";
import ErrorElement from "../../Pages/ErrorPage/ErrorPage";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Register from "../../Pages/registration/Register";
import Login from "../../Pages/registration/Login";
import CreateStore from "../../Pages/CreateStore/CreateStore";
import PrivateRoute from "./privateRoute/PrivateRoute";
import DashboardLayOut from "../../Layout/DashboardLayOut/DashboardLayOut";
import AddProduct from "../../Dashboard/AddProduct";
import AllProducts from "../../Dashboard/AllProducts";
import EditProduct from "../../Dashboard/EditProduct";
import ProductSales from "../../Pages/ProductSales/ProductSales";
import Checkout from "../../Pages/Checkout/Checkout";
import Subscription from "../../Pages/Subscription/Subscription";
import Shop from "../../Pages/Shop/Shop";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";
import Cart from "../../Pages/Cart/Cart";
import AllUsers from "../../Pages/AllUsers/AllUsers";
import AllShops from "../../Pages/AllShops/AllShops";
import ProductCheckout from "../../Pages/ProductCheckout/ProductCheckout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <HomepageLayOut></HomepageLayOut>,
      },
      {
        path: "Register",
        element: <Register></Register>,
      },
      {
        path: "logIn",
        element: <Login></Login>,
      },
      {
        path: "CreateStore",
        element: (
          <PrivateRoute>
            <CreateStore></CreateStore>
          </PrivateRoute>
        ),
      },
      {
        path: "checkout/:type/:price/:limit",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "all-products",
        element: (
          <PrivateRoute>
            <Shop />
          </PrivateRoute>
        ),
      },
      {
        path: "product/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "checkout/:price",
        element: (
          <PrivateRoute>
            <ProductCheckout />
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/dashboard/",
    element: (
      <PrivateRoute>
        <DashboardLayOut />
      </PrivateRoute>
    ),
    children: [
      {
        path: "add-products",
        element: <AddProduct />,
      },
      {
        path: "manage-products",
        element: <AllProducts />,
      },
      {
        path: "all-products",
        element: <ProductSales />,
      },
      {
        path: "edit-product/:id",
        element: <EditProduct />,
      },
      {
        path: "subscription",
        element: <Subscription />,
      },
      {
        path: "all-users",
        element: <AllUsers />,
      },
      {
        path: "all-shops",
        element: <AllShops />,
      },
    ],
  },
]);

export default Router;
