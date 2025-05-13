import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import toast from "react-hot-toast";


const Mainlayput = () => {

     const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      toast(`Welcome, ${user.displayName}`, {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
    }
  }, [user]);

    return (
        <div className='mx-w-4xl mx-auto'>
            {/* Navbar */}
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-232px)] py-12'>
            <Outlet></Outlet>
            </div>
           
            {/* Footer */}
           <Footer></Footer>
        </div>
    );
};

export default Mainlayput;