import React from "react";


function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-md bg-body-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="./images/brand_logo.png" alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse m-2"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav m-auto mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  LOCATION
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  ABOUT
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
            <button class="text-light pe-2 ps-2 p-1  mt-sm-2 nav-btn" type="submit">
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
