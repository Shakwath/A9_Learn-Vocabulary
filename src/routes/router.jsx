import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayput from '../Layouts/Mainlayput';
import Home from '../Pages/Home';
import Startlearning from '../Pages/Startlearning';
import Tutorials from '../Pages/Tutorials.JSX';
import AboutUs from '../Pages/AboutUs';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayput></Mainlayput> ,
    children: [
        {
          path: "/",
          element:<Home></Home>,
         },
         {
            path: "/Startlearning",
            element:<Startlearning></Startlearning>,
           },
           {
            path: "/Tutorials",
            element:<Tutorials></Tutorials>,
           },
           {
            path: '/AboutUs',
            element:<AboutUs></AboutUs>,
           },
       ],
    },
]);

export default router;