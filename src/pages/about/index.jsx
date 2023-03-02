import React from "react";
import About1 from "../../components/about1/about";
import Connecting from "../../components/about1/connecting";
import Discover from "../../components/about1/discover";
import MainLayOut from "../../layouts/mainlayout";
import Signup1 from "../../utils/signupcomponent1";
import TopBanner from "../../utils/topbanner";



const About=()=>{
    return(
<MainLayOut>
<div className="pt-5">
<div>
  <TopBanner heading="<h1>Your <span class='text-danger'>Opportunities</span> are just around the corner</h1>"
    description="Get to know which opportunities are for you"
    button="Join Your Neighborhood"
  />
  <p class="font_20 outfit_R  mb-0"> </p>
</div>
<div>
  <About1/>
</div>
<div>
 <Discover/> 
</div>
<div>
  <Connecting/>
</div>

    <div>
        <Signup1/> 
    </div>
        
    
    

</div>
    </MainLayOut>
    )
}
export default About;