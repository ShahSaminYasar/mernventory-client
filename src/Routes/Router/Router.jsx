
import { createBrowserRouter } from "react-router-dom";

import App from "../../App";
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


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <HomepageLayOut></HomepageLayOut>
            },
            {
                path: 'Register',
                element: <Register></Register>
            },
            {
                path: 'logIn',
                element: <Login></Login>
            },
            {
                path: 'CreateStore',
                element: <PrivateRoute><CreateStore></CreateStore></PrivateRoute>
            }

        ]
    },

    {
        path: '/dashboard/',
        element: <PrivateRoute><DashboardLayOut /></PrivateRoute>,
        children: [
            {
                path: "add-products",
                element: <AddProduct />
            },
            {
                path: "all-products",
                element: <AllProducts />
            },
            {
                path: "edit-product/:id",
                element: <EditProduct /> 
            }
        ]
    }

]);



export default Router;