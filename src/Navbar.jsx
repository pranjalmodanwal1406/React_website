import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid flex justify-between w-100">
                <NavLink className="navbar-brand" to="/">
                  TechnicalTeam
                </NavLink>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                  style={{justifyContent:"end"}}
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                    <NavLink activeClassName="menu_active" className="nav-link" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" className="nav-link" to="/services">
                            Services
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" className="nav-link" to="/about">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" className="nav-link" to="/contact">
                            Contact
                        </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;