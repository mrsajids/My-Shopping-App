import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../action/userAction";
import { ToastContainer, toast } from 'react-toastify';

import "./components.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate()
  const userLogin = useSelector((state) => state.userLogin);
  const userDetails = useSelector(state => state.userDetails)
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    toast.error("Loged Out!")
    navigate("/login")
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveDropdown(null); // close dropdowns when toggling menu
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`nav-menu ${menuOpen ? "show" : ""}`}>
        <li><a href="#">Home</a></li>

        <li className={`dropdown ${activeDropdown === 1 ? "active" : ""}`}>
          <a href="#" onClick={() => toggleDropdown(1)}>Collections ▾</a>
          <ul className="dropdown-menu">
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
          </ul>
        </li>

        <li className={`dropdown ${activeDropdown === 2 ? "active" : ""}`}>
          <a href="#" onClick={() => toggleDropdown(2)}>Shop ▾</a>
          <ul className="dropdown-menu">
            <li><a href="#">Electronics</a></li>
            <li><a href="#">Fashion</a></li>
          </ul>
        </li>

        <li><a href="#">Brand</a></li>

        <li className={`dropdown ${activeDropdown === 3 ? "active" : ""}`}>
          <a href="#" onClick={() => toggleDropdown(3)}>Pages ▾</a>
          <ul className="dropdown-menu">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Faqs</a></li>
            <li><a href="#">Photo gallery</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Support 24/7</a></li>
          </ul>
        </li>

        <li><a href="#">Contact Us</a></li>
      </ul>

      <div className="right-content">
        <span className="nav-right-content mx-2">
          <i class="fa  fa-shopping-cart" aria-hidden="true"></i>
          <span className="badge bg-danger badge-count">0</span>
        </span>
        {
          userInfo ? <span className="nav-right-content mx-2">
            <i class="fa fa-user" aria-hidden="true"></i>
          </span>
            : <button className="badge bg-warning p-1 ms-2" onClick={() => navigate('/login')}>
              Login
            </button>
        }
      </div>
    </nav>
  );
};

export default Navbar;
