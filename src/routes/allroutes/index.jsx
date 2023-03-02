import React from "react";
import { Route, Routes } from 'react-router-dom';
import About from "../../pages/about";
import Agencies from "../../pages/agencies";
import Business from "../../pages/business";
import Contact from "../../pages/contact us";
import Home1 from "../../pages/home";
import Neighbours from "../../pages/neighbour";
import Signin from "../../pages/sign in";
import Signup from "../../pages/sign up";
// import Signup from "../pages/sign up";
 const AllRoutes=()=>{
    return(
    <Routes>
    
          
             <Route path="/" element={<Home1/>}></Route> 
            <Route path="/about" element={<About/>}></Route>
            <Route path="/neighbours" element={<Neighbours/>}> </Route>
            <Route path="/agencies" element={<Agencies />}></Route>
            <Route path="/business" element={<Business/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/login" element={<Signin />}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
    

    </Routes>


        );
}
export default AllRoutes;