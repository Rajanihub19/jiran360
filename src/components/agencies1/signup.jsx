import React from "react"
import { Button } from "reactstrap";
const SignUp2=()=>{
    return(
        <div className=" position-relative text-center pt-3" sx={{backgroundColor:"#fbf6ff"}}>
        <div class="">
          <h3>
          Get <span class="text-danger">Started</span>
          </h3>
          <p>
          Submit an application today to get started with <br/>
          using jiran<span class= "text-danger">360</span>
          </p> 
          <div>
          <Button color="primary">SIGNUP <i class="bi bi-arrow-up-right"></i></Button>
          </div>
          <div>
          
            <img src="http://jiran360.dollopinfotech.com/assets/web/images/svg-icons/BOTTOM_SECOND02_fnl.svg"/>
          </div>
          
        </div>
        
        </div>
    

        
    )

    
}
export default SignUp2;