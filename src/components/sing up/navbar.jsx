import React, { useState } from "react";
// import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

const SignNavbar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <div
        class="d-flex justify-content-between p-3  "
        style={{
          // position: "fixed",
          width: "100%",
          zIndex: "999",
        }}
      >
        <div>
          <NavLink href="/">
            <img src="https://jiran360.my/assets/web/images/logo.svg" />
          </NavLink>
        </div>
        <div className="d-flex gap-3 aling-items-center ">
          <div className="pt-2">
            <h6>Already have an account?</h6>
          </div>

          <div>
            <NavLink href="/login">
              <button
                type="button"
                style={{ color: "#9227ff", border: "1px solid #9227ff" }}
                class=" box3 bg-beige rounded-pill pt-2 pb-2 pe-2 ps-2"
              >
                <i class="bi bi-person"></i>Login now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignNavbar;
