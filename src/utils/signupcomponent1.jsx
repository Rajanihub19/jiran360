import React from "react";
import { Button } from "reactstrap";
const Signup1 = () => {
  return (
    <div className=" position-relative text-center p-4 bg-light  ">
      <div class="">
        <h1 style={{ fontWeight: "bold" }}>
          Connect swiftly with your
          <br />
          jiran<span class="text-danger">360</span>
        </h1>
        <p style={{ color: "#6c757d", fontSize: "18px" }}>
          A quick sign up to get yourself <br />
          posted about your neighborhood <br />
          or participate in the social activities with your neighbor.
        </p>
        <div>
          <Button
            className=" button2 rounded-pill pt-3 pb-3 pe-5 ps-5"
            style={{
              color: "white",
              border: " 1px solid #9227ff",
              backgroundColor: "#9227ff",
              width: "15%",
              position: "absolute",
              bottom: "190px",
              left: "35em",
            }}
          >
            SIGNUP <i class="bi bi-arrow-up-right"></i>
          </Button>

          <img src="https://jiran360.my/assets/web/images/svg-icons/BOTTOM_SECOND02_fnl0000.svg" />
        </div>
      </div>
    </div>
  );
};
export default Signup1;
