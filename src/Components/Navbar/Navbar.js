import React from 'react'

export default function Navbar() {
  return (
    <div>
          <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Movie App</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
            >
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                        Movie App
                    </h5>
                    <button
                        type="button"
                        class="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="offcanvas-body ">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                        <li class="nav-item text-black">
                            <a
                                class="nav-link active text-black"
                                aria-current="page"
                                href="#"
                                >Home</a
                            >
                        </li>
                        <hr />
                        <li class="nav-item text-black">
                            <a class="nav-link text-black" href="#">About Us</a>
                        </li>
                        <hr />
                    
                    </ul>
                  
                </div>
            </div>
        </div>
    </nav>
    
    </div>
  )
}
