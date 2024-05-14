import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

  const [userName, setUserName] = useState("");

useEffect(() => {
  axios
    .get("http://localhost:8000/users")
    .then((result) => {
      const user = result.data[0]; 
      if (user) {
        setUserName(`${user.fname} ${user.lname}`);
      }
    })
    .catch((err) => console.log(err));
}, [userName]);



  
  return (
    <div>
      {/* Navbar */}

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
          <p className="bold">Home</p>
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
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/Create" class="nav-link active" aria-current="page" href="#">
                <p className="bold">Create Employee</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/Display" class="nav-link active" aria-current="page" href="#">
                <p className="bold">Display Employee</p>
                </Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
            <ul class="navbar-nav ">
              <li class="nav-item me-2">
                <Link to="/Display" class="nav-link active" aria-current="page" href="#">
                <p className="bold">{userName}</p>
                </Link>
              </li>
              <li class="nav-item">
              <Link to="/">  
              <button className="btn btn-outline-danger" type="submit">LogOut</button>
              </Link>
              </li>
            </ul>
              
            </form>
          </div>
        </div>
      </nav>

{/* Content */}

<h1 className="text-center m-5">WelCome To Admin Panel</h1>


    </div>
  );
};

export default Home;


