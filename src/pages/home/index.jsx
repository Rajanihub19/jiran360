import React from "react";

import HomeBanner from "../../components/home1/banner";
import MainLayOut from "../../layouts/mainlayout";
import Signup1 from "../../utils/signupcomponent1";


const Home1=()=>{
    return(
        <MainLayOut>
        <div className=" ">
        {/* <div>
        <HomeBanner/>
        </div> */}
        <div>
        <Signup1/> 
        </div>
        <div>
        <HomeBanner/>
        </div>
        </div>
        </MainLayOut>
        
    )
}
export default Home1;