import React from "react";
import MainLayOut from "../../layouts/mainlayout";
import Signup1 from "../../utils/signupcomponent1";
import TopBanner from "../../utils/topbanner";

import "F:/myreact/Jiran360/src/components/agencies1/ndex.css"

const Neighbours=()=>{
    return(
<MainLayOut>
<div className="pt-5">
<div >
  <TopBanner heading="<h1>Recognize Your Jiran<span class='text-danger'>360!</span></h1>"
    description="Opportunities are nearby if you keep looking"
    button="Join Your Neighborhood"
  />
</div>
<div class="d-flex flex-row mt-5" >
    <div>
    <img src="http://jiran360.dollopinfotech.com/assets/web/images/svg-icons/multicultural-community.svg"></img>
    </div>
    <div>
    <h1>Know more to Accept <br/>More with <span class="text-danger">jiran360</span></h1>
   <p>
   Jiran360 focuses on providing up-to-date information and valuable services<br/> among your neighborhood, a platform of getting to know your <br/>
    neighbors better, through social events and casual gathering, providing <br/> public agencies and
    services, so be sure to get support when it is needed! 
   </p>
   
    </div>
    
</div>
<div class="mt-5 mb-5 me-5 ms-5">
<p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>    
</div>
<div>
    <div class="text-center">
    <h1> Let’s connect through jiran<span class=" text-danger">360</span></h1>
    <p>
    Connect and participate around your neighbourhood
    through Jiran360, an anticipating place to socialise!
    </p>
    </div>

    <div class="d-flex flex-row justify-content-between ms-5 me-5  ">
    <div class="text-center mt-5 mb-5 pt-5 pb-5 pe-5 ps-5 border box">
    <div class=" mb-4">
    <img src="http://jiran360.dollopinfotech.com/assets/web/images/svg-icons/useful.svg"></img>
    </div>
     <h4>One-Stop information</h4>
     <p >Stay on top of the latest news around your <br/>Jiran360.</p>   
    </div>
    <div>
     <div class="text-center mt-5 mb-5 pt-5 pb-5 pe-5 ps-5 border box">
       <div class=" mb-4"> <img src="http://jiran360.dollopinfotech.com/assets/web/images/svg-icons/private.svg"></img></div>
         <h4>Stay Protected</h4>
        <p>Be sure that privacy stays amongst your<br/>  Jiran360 only</p>
     </div>
    </div>
    <div>
        <div class="text-center mt-5 mb-5 pt-5 pb-5 pe-5 ps-5 border box">
          <div class=" mb-4">
            <img src="http://jiran360.dollopinfotech.com/assets/web/images/svg-icons/proven.svg"></img>
          </div>
          <h4>Be Trustworthy</h4>
          <p>Over XXX users have joined Jiran360 <br/> only</p> 
        </div>
    </div>

    </div>
</div>
<div>
     <Signup1/> 
</div>


</div>
</MainLayOut>
    )
}
export default Neighbours;