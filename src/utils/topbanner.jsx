import React from "react";
import { Button } from "reactstrap";

const TopBanner = ({ heading, description, button }) => {
    return (
        <div class=" text-center bg-light  p-5 ">
            <div className="pt-5 h1"  dangerouslySetInnerHTML={{ __html: heading }} />
            <div  className="pb-3" dangerouslySetInnerHTML={{ __html: description }} />


            {/* <h1>{heading}</h1> */}
           
            {/* <Button  class="btn btn-primary rounded-pill" href="/login">{button}</Button> */}
            <button type="button" className=" button1 rounded-pill p-3 ">{button}</button>
            <div class="text-end" >
                <img src="http://jiran360.dollopinfotech.com/assets/web/images/Path_1390.png" />
            </div>
        </div>
    )
}
export default TopBanner;