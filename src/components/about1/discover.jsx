import React from "react";
import Container from "@mui/material/Container";
const Discover = () => {
  return (
    // <div className="d-flex justify-content-between me-5 ms-5">
    <Container className="d-flex justify-content-between m-5 pb-5" style={{ borderBottom: "1px dashed black" }}>
      <div>
        <div
          style={{
            backgroundColor: "#efe6e6",
            width: "100px",
            height: "100px",
            paddingLeft: "20px",
            //  paddingRight:"20px",
            paddingTop: "20px",
            marginBottom: "30px",
          }}
        >
          <img src="http://jiran360.dollopinfotech.com/assets/web/images/svg-icons/out_of_your_us.svg"></img>
        </div>

        <h3>Discover your jiran360 *</h3>
        <p>
          Jiran360 is a place where you can be sure of where to reach out for
          support around your neighborhood. From helpful neighbors to engaging
          services, even when you are looking for household products, Jiran360
          has it all! Jiran360 stays reliable when aid is needed.{" "}
        </p>
      </div>
      <div>
        <div
          style={{
            backgroundColor: "#efe6e6",
            width: "100px",
            height: "100px",
            paddingLeft: "20px",
            //  paddingRight:"20px",
            paddingTop: "20px",
            marginBottom: "30px"
          }}
        >
          <img src="http://jiran360.dollopinfotech.com/assets/web/images/svg-icons/neibher_hood_network.svg"></img>
        </div>

        <h3>One Network For All</h3>
        <p>
          On errand to get things done? Jiran360 is here to provide supply to
          your demands, informative news and other services for you and your
          family. Keep in the loop with your network of neighborhood, as
          Jiran360 stays updated from time to time.{" "}
        </p>
      </div>
    </Container>

    // </div>
  );
};
export default Discover;
