import React, { Component } from "react";
import { Link } from "react-router-dom";
import news from "./news.png";
export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/insight">
              <img
                className="mx-1"
                style={{ width: 30 }}
                src={news}
                alt=""
                srcset=""
              />
              Insight
            </Link>
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
            >
              <ul className="navbar-nav me-auto mb-lg-0 mx-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/home"
                  >
                    <i class="fas fa-home mx-1"></i>Home
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/#">
                    About Us
                  </Link>
                </li> */}

                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    <i class="fas fa-briefcase mx-1"></i> Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    <i class="fas fa-volleyball-ball mx-1"></i> Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    <i class="fas fa-rocket mx-1"></i> Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    <i class="fas fa-syringe mx-1"></i> Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">
                    <i class="far fa-newspaper mx-1"></i> General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    <i class="fas fa-laptop-code mx-1"></i> Technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    <i class="fas fa-glass-cheers mx-1"></i> Entertainment
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
