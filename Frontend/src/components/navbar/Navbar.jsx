import React from "react";
import { useSelector } from "react-redux";
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

  //get cart value form reducer
  const { cart } = useSelector((state) => ({
    cart: state.cart?.cart
  
  }))
  
  // const { cart } = useSelector((state) => {
  //   console.log(state); // Check the structure of the state object
  //   console.log(state.cart); // Check if the `cart` property exists
  //   return {
  //     cart: state.cart.cart
  //   };
  // });
  


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

            <Link class="navbar-brand mt-2 mt-lg-0" to={'/'}>
              <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height="15"
                alt="MDB Logo"
                loading="lazy"
              />
            </Link>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center  ms-auto">
              <li class="nav-item">
                <Link class="nav-link" to={'/ '}>Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={'/'}>Shop</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={'/About'}>About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={'/'}>Blog</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={'/Contact'}>Contact</Link>

              </li>
            </ul>

          </div>



          <div class="d-flex align-items-center">

          <Link to={'/cart'} className="m-2">
              <i className="fa fa-shopping-cart fa-lg"></i>
              <span className="badge rounded-pill badge-notification bg-danger">{cart && cart.length}</span>
            </Link>


            <div class="dropdown">
              <Link
                class="link-secondary me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-bell"></i>
                <span class="badge rounded-pill badge-notification bg-danger">1</span>
              </Link>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link class="dropdown-item" href="#">Some news</Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="#">Another news</Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="#">Something else here</Link>
                </li>
              </ul>
            </div>

            {
              user ? (
                <div class="dropdown">
                  <Link
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
                    {/* {user.fname} */}
                  </Link>
                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuAvatar"
                  >
                    {
                      user.isAdmin ? (
                        <>
                          <li><Link to={'/admin-dashboard'} class="dropdown-item">Admin Dashboard</Link></li>
                          <li><Link to={'/admin/orders'} class="dropdown-item">Admin Orders</Link></li>
                          <li><Link class="dropdown-item" onClick={logout}>Logout</Link></li>
                        </>
                      ) : (
                        <>
                          <li><Link to={'/profile'} class="dropdown-item">Profile</Link></li>
                          <li><Link to={'/orders'} class="dropdown-item">My Orders</Link></li>
                          <li><Link class="dropdown-item" onClick={logout}>Logout</Link></li>
                        </>
                      )
                    }
                  </ul>
                </div>
              ) : (
                <div class="dropdown">
                  <Link
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
                    {/* {user.fname} */}
                  </Link>
                  <>
                    <ul
                      class="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbarDropdownMenuAvatar"
                    >
                      <li>
                        <Link class="dropdown-item" to={'/register'}>Register</Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to={'/login'}>Login</Link>
                      </li>
                    </ul>
                  </>
                </div>
              )
            }


            {/* <div class="dropdown">
              <Link
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
              </Link>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <Link class="dropdown-item" to={'/register'}>Register</Link>
                </li>
                <li>
                  <Link class="dropdown-item" to={'/login'}>Login</Link>
                </li>
              </ul>
            </div> */}
          </div>

        </div>

      </nav>

    </>
  );
};

export default Navbar;
