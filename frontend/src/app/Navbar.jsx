import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          The Restaurant Garden
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/login">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/browse">
                Browse Restaurants
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar;