import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//icon

import { faHospital } from "@fortawesome/free-regular-svg-icons";
import logo from "../assets/images/logo.png";
import IMG01 from "../assets/images/doctors/doctor-thumb-02.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import $ from "jquery";
import { useEffect } from "react";
import config from "config";

const Header = (props) => {
  let pathnames = window.location.pathname;

  const [active, setActive] = useState(false);
  const url = pathnames.split("/").slice(0, -1).join("/");

  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  useEffect(() => {
    $(".main-nav a").on("click", function (e) {
      if ($(this).parent().hasClass("has-submenu")) {
        e.preventDefault();
      }
      if (!$(this).hasClass("submenu")) {
        $("ul", $(this).parents("ul:first")).slideUp(350);
        $("a", $(this).parents("ul:first")).removeClass("submenu");
        $(this).next("ul").slideDown(350);
        $(this).addClass("submenu");
      } else if ($(this).hasClass("submenu")) {
        $(this).removeClass("submenu");
        $(this).next("ul").slideUp(350);
      }
    });
  }, []);

  return (
    <>
      {pathnames.includes("homeslider1") && (
        <div className="header-top">
          <div className="left-top ">
            <ul>
              <li>
                <i className="fas fa-map-marker-alt top-icon" />
                123, washington street, uk
              </li>
              <li>
                <i className="fas fa-phone-volume top-icon" />
                +19 123-456-7890
              </li>
              <li>
                <i className="fas fa-envelope top-icon" />
                mail@yourdomain.com
              </li>
            </ul>
          </div>
          <div className="right-top ">
            <ul>
              <li>
                <i className="fab fa-facebook-f top-icons" />
              </li>
              <li>
                <i className="fab fa-instagram top-icons" />
              </li>
              <li>
                <i className="fab fa-linkedin-in top-icons" />
              </li>
              <li>
                <i className="fab fa-twitter top-icons" />
              </li>
            </ul>
          </div>
        </div>
      )}
      {!pathnames.includes("home1") &&
        !pathnames.includes("home4") &&
        !pathnames.includes("home6") &&
        !pathnames.includes("home7") &&
        !pathnames.includes("home8") && (
          <header className="header">
            <nav
              className={`navbar navbar-expand-lg header-nav ${
                pathnames.includes("home1") ? "nav-transparent" : ""
              }`}
            >
              <div className="navbar-header">
                <a
                  href="#0"
                  id="mobile_btn"
                  onClick={() => onHandleMobileMenu()}
                >
                  <span className="bar-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </a>
                <Link to="/home" className="navbar-brand logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
                </Link>
              </div>
              <div className="main-menu-wrapper">
                <div className="menu-header">
                  <Link to="/home" className="menu-logo">
                    <img src={logo} className="img-fluid" alt="Logo" />
                  </Link>
                  <a
                    href="#0"
                    id="menu_close"
                    className="menu-close"
                    onClick={() => onhandleCloseMenu()}
                  >
                    <i className="fas fa-times"></i>
                  </a>
                </div>
                <ul className="main-nav">
                  {/* <li className={`${pathnames === "/home" ? "active" : ""}`}>
                <a href="/home" to="/home">
                Home
                  </a>
                </li> */}
                  {/* <li className={`has-submenu ${pathnames.includes("home") || pathnames.includes("home1") || pathnames.includes("home2") || pathnames.includes("homeslider1") || pathnames.includes("home4") || pathnames.includes("homeslider2") || pathnames.includes("home6") || pathnames.includes("home7") || pathnames.includes("home8") ? "active" : ""}`}>
                  <a href="">Home <i className="fas fa-chevron-down" /></a>
                  <ul className="submenu">
                  <li className={pathnames.includes("home") && !pathnames.includes("home1") && !pathnames.includes("home2") && !pathnames.includes("homeslider1") && !pathnames.includes("home4") && !pathnames.includes("homeslider2") && !pathnames.includes("home6") && !pathnames.includes("home7") && !pathnames.includes("home8")  ? "active" : ""}><Link to="/home">Home</Link></li>
                    <li className={pathnames.includes("home1") ? "active" : ""}><Link to="/home1">Home 1</Link></li>
                    <li className={pathnames.includes("home2") ? "active" : ""}><Link to="/home2">Home 2</Link></li>
                    <li className={pathnames.includes("homeslider1") ? "active" : ""}><Link to="/homeslider1">Home 3</Link></li>
                    <li className={pathnames.includes("home4") ? "active" : ""}><Link to="/home4">Home 4</Link></li>
                    <li className={pathnames.includes("homeslider2") ? "active" : ""}><Link to="/homeslider2">Home 5</Link></li>
                    <li className={pathnames.includes("/home6") ? "active" : ""}><Link to="/home6">Home 6</Link></li>
                    <li className={pathnames.includes("/home7") ? "active" : ""}><Link to="/home7">Home 7</Link></li>
                    <li className={pathnames.includes("/home8") ? "active" : ""}><Link to="/home8">Home 8</Link></li>
                  </ul>
                </li> */}
                  <li
                    className={`has-submenu ${
                      url.includes("/doctor") ? "active" : ""
                    }`}
                  >
                    <a href="#0">
                      Doctors
                      <i className="fas fa-chevron-down" aria-hidden="true"></i>
                    </a>
                    <ul className={`submenu`}>
                      <li
                        className={
                          pathnames.includes("doctor-dashboard") ? "active" : ""
                        }
                      >
                        <Link
                          to="/doctor/doctor-dashboard"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Doctor Dashboard
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("appointments") ? "active" : ""
                        }
                      >
                        <Link
                          to="/doctor/appointments"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Appointments
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("schedule-timing") ? "active" : ""
                        }
                      >
                        <Link
                          to="/doctor/schedule-timing"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Schedule Timing
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("my-patients") ? "active" : ""
                        }
                      >
                        <Link
                          to="/doctor/my-patients"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Patients List
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("patient-profile") ? "active" : ""
                        }
                      >
                        <Link
                          to="/doctor/patient-profile"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Patients Profile
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("chat-doctor") ? "active" : ""
                        }
                      >
                        <Link
                          to="/doctor/chat-doctor"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Chat
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("invoice") ? "active" : ""
                        }
                      >
                        <Link
                          to="/pages/invoice"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Invoices
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("profile-setting") ? "active" : ""
                        }
                      >
                        <Link
                          to="/doctor/profile-setting"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Profile Settings
                        </Link>
                      </li>
                      <li
                        className={pathnames.includes("review") ? "active" : ""}
                      >
                        <Link
                          to="/doctor/review"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Reviews
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("doctor-register") ? "active" : ""
                        }
                      >
                        <Link
                          to="/doctor/doctor-register"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Doctor Register
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`has-submenu ${
                      url.includes("/patient") ? "active" : ""
                    }`}
                  >
                    <a href="#0">
                      Patients{" "}
                      <i className="fas fa-chevron-down" aria-hidden="true"></i>
                    </a>
                    <ul className={`submenu`}>
                      <li
                        className={
                          pathnames.includes("dashboard") ? "active" : ""
                        }
                      >
                        <Link
                          to="/patient/dashboard"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Patient Dashboard
                        </Link>
                      </li>

                      <li
                        className={`has-submenu ${
                          pathnames.includes("doctor") &&
                          !pathnames.includes("doctor-profile") &&
                          !pathnames.includes("search-doctor")
                            ? "active"
                            : ""
                        }`}
                      >
                        <a href="#0">Doctors</a>
                        <ul className="submenu">
                          <li
                            className={
                              pathnames.includes("doctor-grid") ? "active" : ""
                            }
                          >
                            <Link
                              to="/patient/doctor-grid"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Map Grid
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("doctor-list") ? "active" : ""
                            }
                          >
                            <Link
                              to="/patient/doctor-list"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Map List
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={
                          pathnames.includes("search-doctor") ? "active" : ""
                        }
                      >
                        <Link
                          to="/patient/search-doctor"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Search Doctor
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("doctor-profile") ? "active" : ""
                        }
                      >
                        <Link
                          to="/patient/doctor-profile"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Doctor Profile
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("booking") &&
                          !pathnames.includes("booking-success")
                            ? "active"
                            : ""
                        }
                      >
                        <Link
                          to="/patient/booking"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Booking
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("checkout") ? "active" : ""
                        }
                      >
                        <Link
                          to="/patient/checkout"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Checkout
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("booking-success") ? "active" : ""
                        }
                      >
                        <Link
                          to="/patient/booking-success"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Booking Success
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("favourites") ? "active" : ""
                        }
                      >
                        <Link
                          to="/patient/favourites"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Favourites
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("patient-chat") ? "active" : ""
                        }
                      >
                        <Link
                          to="/patient/patient-chat"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Chat
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("profile") &&
                          !pathnames.includes("doctor-profile")
                            ? "active"
                            : ""
                        }
                      >
                        <Link
                          to="/patient/profile"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Profile Settings
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("change-password") ? "active" : ""
                        }
                      >
                        <Link
                          to="/patient/change-password"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Change Password
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    className={`has-submenu ${
                      url.includes("/pages") ? "active" : ""
                    }`}
                  >
                    <a href="#0">
                      Pages
                      <i className="fas fa-chevron-down" aria-hidden="true"></i>
                    </a>
                    <ul className={`submenu`}>
                      <li
                        className={`${
                          pathnames.includes("/voice-call") ? "active" : ""
                        }`}
                      >
                        <Link
                          to="/pages/voice-call"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Voice Call
                        </Link>
                      </li>
                      <li
                        className={`${
                          pathnames.includes("/video-call") ? "active" : ""
                        }`}
                      >
                        <Link
                          to="/pages/video-call"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Video Call
                        </Link>
                      </li>

                      <li
                        className={`${
                          pathnames.includes("/calendar") ? "active" : ""
                        }`}
                      >
                        <Link
                          to="/pages/calendar"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Calendar
                        </Link>
                      </li>
                      <li
                        className={`${
                          pathnames.includes("/component") ? "active" : ""
                        }`}
                      >
                        <Link
                          to="/pages/component"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Components
                        </Link>
                      </li>

                      <li
                        className={`has-submenu ${
                          pathnames.includes("/invoice-view") ? "active" : ""
                        }`}
                      >
                        <a href="#0">Invoices</a>
                        <ul className="submenu">
                          <li
                            className={
                              pathnames.includes("invoice") ? "active" : ""
                            }
                          >
                            <Link
                              to="/pages/invoice"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Invoices
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("-view") ? "active" : ""
                            }
                          >
                            <Link
                              to="/pages/invoice-view"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Invoice View
                            </Link>
                          </li>
                        </ul>
                      </li>
                      {/* <li
                        className={`${
                          pathnames.includes("/blank-page") ? "active" : ""
                        }`}
                      >
                        <Link
                          to="/pages/blank-page"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Starter Page
                        </Link>
                      </li> */}

                      <li
                        className={pathnames.includes("login") ? "active" : ""}
                      >
                        <Link to="/login" onClick={() => onhandleCloseMenu()}>
                          Login
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("/register") ? "active" : ""
                        }
                      >
                        <Link
                          to="/register"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Register
                        </Link>
                      </li>
                      <li
                        className={`${
                          pathnames === "/forgot-password" ? "active" : ""
                        }`}
                      >
                        <Link
                          to="/forgot-password"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Forgot Password
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`has-submenu ${
                      url.includes("/blog") ? "active" : ""
                    }`}
                  >
                    <a href="">
                      Blog<i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="submenu">
                      <li
                        className={
                          pathnames.includes("blog-list") ? "active" : ""
                        }
                      >
                        <Link
                          to="/blog/blog-list"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Blog List
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("blog-grid") ? "active" : ""
                        }
                      >
                        <Link
                          to="/blog/blog-grid"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Healthcare Blogs
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("blog-details") ? "active" : ""
                        }
                      >
                        <Link
                          to="/blog/blog-details"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {(pathnames.includes("/") ||
                    pathnames.includes("/home") ||
                    pathnames.includes("/home5")) &&
                  !pathnames.includes("/home2") &&
                  !pathnames.includes("/home3") &&
                  !pathnames.includes("/homeslider1") ? (
                    <li className="has-submenu">
                      <a href="#" target="_blank">
                        Admin <i className="fas fa-chevron-down" />
                      </a>
                      <ul className="submenu">
                        <li>
                          <Link href="/admin" target="_blank" to="/admin">
                            Admin
                          </Link>
                        </li>
                        {/* <li>
                          <Link
                            href="/pharmacyadmin"
                            target="_blank"
                            to="/pharmacyadmin"
                          >
                            Pharmacy Admin
                          </Link>
                        </li> */}
                      </ul>
                    </li>
                  ) : (
                    <li>
                      <a
                        href={`${config.publicPath}/admin`}
                        target="_blank"
                        to="/admin"
                      >
                        Admin
                      </a>
                    </li>
                  )}
                  <li
                    className="login-link"
                    onClick={() => onhandleCloseMenu()}
                  >
                    <Link to="/">Login / Signup</Link>
                  </li>
                </ul>
              </div>
              <ul className="nav header-navbar-rht">
                <li className="nav-item contact-item">
                  <div className="header-contact-img">
                    <i className="far fa-hospital" />
                  </div>
                  <div className="header-contact-detail">
                    <p className="contact-header">Contact</p>
                    <p className="contact-info-header"> +1 315 369 5943</p>
                  </div>
                </li>

                {props.location.pathname === "/pages/voice-call" ||
                props.location.pathname === "/pages/video-call" ? (
                  <>
                    <Dropdown className="user-drop nav-item dropdown has-arrow logged-item">
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <img
                          className="rounded-circle"
                          src={IMG01}
                          width="31"
                          alt="Darren Elder"
                        />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <div className="user-header">
                          <div className="avatar avatar-sm">
                            <img
                              src={IMG01}
                              alt="User"
                              className="avatar-img rounded-circle"
                            />
                          </div>
                          <div className="user-text">
                            <h6>Darren Elder</h6>
                            <p className="text-muted mb-0">Doctor</p>
                          </div>
                        </div>
                        <Dropdown.Item href="/doctor/doctor-dashboard">
                          Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item href="/doctor/profile-setting">
                          Profile Settings
                        </Dropdown.Item>
                        <Dropdown.Item href="/login">Logout</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link to="/login" className="nav-link header-login">
                        login / Signup{" "}
                      </Link>
                    </li>{" "}
                  </>
                )}
              </ul>
            </nav>
          </header>
        )}
    </>
  );
};

export default Header;
