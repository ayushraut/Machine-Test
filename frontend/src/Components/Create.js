import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Component, useState } from "react";
import Display from "./Display";

const Create = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [designation, setDesignation] = useState();
  const [gender, setGender] = useState();
  const [course, setCourse] = useState();
  const [file, setFile] = useState();

  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("mobile", mobile);
    formdata.append("designation", designation);
    formdata.append("gender", gender);
    formdata.append("course", course);

    axios
      .post("http://localhost:3001/createuser", formdata)
      .then((result) => {
        console.log(result);
        navigate("/Display");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {/* Navbar */}

      <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-lg">
        <div class="container-fluid">
          <Link to="/Home" class="navbar-brand" href="#">
            <p className="bold"> Employee List</p>
          </Link>
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form class="d-flex" role="search">
              <Link to="/">
                <button className="btn btn-outline-danger" type="submit">
                  LogOut
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>

      {/* Content */}
      <form onSubmit={Submit} class="row g-3 ms-5 me-5 mt-2 shadow-lg">
        <div class="col-md-10">
          <label for="validationDefault01" class="form-label">
            <p className="bold">Name</p>
          </label>
          <input
            type="text"
            name="name"
            class="form-control"
            id="validationDefault01"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div class="col-md-10">
          <label for="validationDefault02" class="form-label">
            <p className="bold">Email</p>
          </label>
          <input
            type="email"
            name="email"
            class="form-control"
            id="validationDefault02"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div class="col-md-10">
          <label for="validationDefault02" class="form-label">
            <p className="bold">Mobile No.</p>
          </label>
          <input
            type="number"
            name="mobile"
            class="form-control"
            id="validationDefault02"
            placeholder="Mobile No."
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>

        <div class="col-md-10">
          <label for="validationDefault04" class="form-label">
            <p className="bold">Designation</p>
          </label>
          <select
            class="form-select"
            id="validationDefault04"
            onChange={(e) => setDesignation(e.target.value)}
            required
          >
            <option selected disabled value=""></option>
            <option>HR</option>
            <option>Manager</option>
            <option>Sales</option>
          </select>
        </div>
        <div class="col-md-10">
          <label class="form-label">
            <p className="bold">Gender</p>
          </label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="Male"
              onChange={(e) => setGender(e.target.value)}
              required
            />
            <label class="form-check-label" for="male">
              Male
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="Female"
              onChange={(e) => setGender(e.target.value)}
              required
            />
            <label class="form-check-label" for="female">
              Female
            </label>
          </div>
        </div>

        <div class="col-md-10">
          <label for="validationDefault05" class="form-label">
            <p className="bold">Course</p>
          </label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="MCA"
              onChange={(e) => setCourse(e.target.value)}
              id="mcaCheckbox"
            />
            <label class="form-check-label" for="mcaCheckbox">
              MCA
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="BCA"
              onChange={(e) => setCourse(e.target.value)}
              id="bcaCheckbox"
            />
            <label class="form-check-label" for="bcaCheckbox">
              BCA
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="BSC"
              onChange={(e) => setCourse(e.target.value)}
              id="bscCheckbox"
            />
            <label class="form-check-label" for="bscCheckbox">
              BSC
            </label>
          </div>
        </div>

        <div class="col-md-10">
          <label for="validationDefault05" class="form-label">
            <p className="bold">Image</p>
          </label>
          <input
            type="file"
            class="form-control"
            id="validationDefault05"
            // required
            name="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
        </div>

        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
