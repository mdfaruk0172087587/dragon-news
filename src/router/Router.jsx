import {
    createBrowserRouter,
    
  } from "react-router";

import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";


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
      path: "/about",
      element: <p>about</p>,
    },
    {
      path: "/news",
      element: <p>news</p>,
    },
  ]);
    