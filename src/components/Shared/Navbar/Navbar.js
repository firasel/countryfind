import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import cancelIcon from "../../../Images/cancelMenu.svg";
import menuIcon from "../../../Images/menu.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isExpand, setIsExpand] = useState(false);
  const history = useHistory();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="navbar-brand navbarTitle" onClick={()=>history.push('/home')}>
            <span>C</span>ountry Find
          </div>
          <button
            className="navbar-toggler togglerBtn menuToggleBtn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setIsExpand(!isExpand)}
          >
            {!isExpand ? (
              <img src={menuIcon} alt="menu icon" />
            ) : (
              <img src={cancelIcon} alt="menu icon" />
            )}
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 navbarItem ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link active navbarLink px-2 my-2"
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
