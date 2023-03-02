import React from "react";
import SignFooter from "./footer";
import SignNavbar from "./navbar";
import SignForm from "./signForm";
const SignBanner = () => {
  return (
    <div className="d-flex">
      <div className="position-fixed " style={{ zIndex: "1", top: "0" }}>
        <img
          width={"270px"}
          height={"100%"}
          src="http://jiran360.dollopinfotech.com/assets/web/images/signup_left.png"
        />
      </div>
      <div style={{ width: "450px" }}></div>
      <div>
        <div>
          <SignNavbar />
        </div>
        <div>
          <SignForm />
        </div>
        <div>
          <SignFooter />
        </div>
      </div>
    </div>
  );
};
export default SignBanner;
