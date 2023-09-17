import React from "react";
import { Link,useLocation } from "react-router-dom";
const Headers = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const location = useLocation()
console.log(location.pathname,"path")
const path=location.pathname
  return (
    <>
      <div class="main-container">
        <div class="aside">
          <div class="nav-toggler">
            <span></span>
          </div>
          <div class="aside-inner">
            <div class="logo">
              <a href="#home ">Nirmal&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Raj</a>
            </div>
            <ul class="nav">
              <li>
                <Link to="/" class={path==="/"?"active":""}>
                  <i class="fa fa-home"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/about" class={path==="/about"?"active":""}>
                  <i class="fa fa-user" ></i> About
                </Link>
              </li>
              <li>
                <Link to="/Education"class={path==="/Education"?"active":""}>
                  <i class="fa fa-envelope"></i> Education
                </Link>
              </li>
              <li>
                <Link to="/experience" class={path==="/experience"?"active":""}>
                  <i class="fa fa-list"></i> Experience
                </Link>
              </li>
              <li>
                <Link to="/portfolia" class={path==="/portfolia"?"active":""}>
                  <i class="fa fa-briefcase"></i> Skill
                </Link>
              </li>
              <li>
                <Link to="/contact" class={path==="/contact"?"active":""}>
                  <i class="fa fa-comments"></i> Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headers;
