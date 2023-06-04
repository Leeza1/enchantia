import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate()
  //  get user from local storage
  const user = JSON.parse(localStorage.getItem("user"))
  console.log(user)

  // logout function
  const logout = () => {
    localStorage.clear()
    navigate("/login")
  }

  return (
    <>
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <Link to={'/'} class="navbar-brand me-2">
            <h3 className="text-danger fw-bold">
              Online-
              <span className="text-black">Bazzar</span>
            </h3>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarButtonsExample">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Dashboard
                </a>
              </li>
            </ul>

            <div class="d-flex align-items-center">
              {
                user ? (
                  <div class="dropdown">
                    <button
                      class="btn btn-primary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {user.fname}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      {
                        user.isAdmin ? (
                          <li><Link to={'/admin-dashboard'} class="dropdown-item">Admin Dashboard</Link></li>
                        ) : <li><Link to={'/profile'} class="dropdown-item">Profile</Link></li>
                      }
                      <li><Link class="dropdown-item" onClick={logout}>Logout</Link></li>
                    </ul>
                  </div>
                ) : (
                  <>
                    <Link to={"/register"}>
                      <button type="button" class="btn btn-primary px-3 me-2">
                        Register
                      </button>
                    </Link>
                  </>
                )
              }
            </div>
          </div>
        </div>
      </nav> */}

      <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar  top-nav-collapse" >

        <div class="container">

          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>


          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <a class="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height="15"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center  ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Shop</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>

          </div>



          <div class="d-flex align-items-center">

            <a class="link-secondary me-3" href="#">
              <i class="fas fa-shopping-cart"></i>
            </a>


            <div class="dropdown">
              <a
                class="link-secondary me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-bell"></i>
                <span class="badge rounded-pill badge-notification bg-danger">1</span>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="#">Some news</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Another news</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </div>

            <div class="dropdown">
              <a
                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  class="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a class="dropdown-item" href="#">My profile</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Settings</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Logout</a>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </nav>

    </>
  );
};

export default Navbar;
