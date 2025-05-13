import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayput from '../Layouts/Mainlayput';
import Home from '../Pages/Home';
import Startlearning from '../Pages/Startlearning';
import Tutorials from '../Pages/Tutorials.JSX';
import AboutUs from '../Pages/AboutUs';
import Login from '../Components/Login';
import Register from '../Components/Register';
import VocabularyDetails from '../Components/VocabularyDetails';
import PrivateProvider from "../routes/PrivateProvider";
import MyProfile from '../Components/MyProfile';
import Lesson from '../Components/lesson';

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
            {
                path:'/auth/login',
                element:<Login></Login>
            },
            {
                path:'/auth/register',
                element:<Register></Register>
            },
             {
              path: "/vocabularies/:id", // Dynamic route for vocabulary details
              element: <VocabularyDetails></VocabularyDetails>,
      },
      {
        path: "/lesson/:id", // Dynamic route for vocabulary details
        element: (
          <PrivateProvider>
            <Lesson></Lesson>
          </PrivateProvider>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateProvider>
            <div>
              <MyProfile></MyProfile>
            </div>
          </PrivateProvider>
        ),
      },
   
       ],
    },
]);

export default router;