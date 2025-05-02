import {
    createBrowserRouter,
    
  } from "react-router";

import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import AuthLayOut from "../layouts/AuthLayOut";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRouter from "../priveteRouter/PrivateRouter";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayouts></HomeLayouts>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/category/:id',
          element: <CategoryNews></CategoryNews>,
          loader: () => fetch('/news.json')
          
        }
      ]
    },
    {
      path: "/auth",
      element: <AuthLayOut></AuthLayOut>,
      children:[
        {
          path: '/auth/login',
          element: <Login></Login>
        },
        {
          path: '/auth/register',
          element: <Register></Register>
        }
      ]
    },
    {
      path: "/newsDetails/:id",
      element: <PrivateRouter><NewsDetails></NewsDetails></PrivateRouter>,
      loader: () => fetch('/news.json')
    },
  ]);
    