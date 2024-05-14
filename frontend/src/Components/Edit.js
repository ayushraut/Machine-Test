import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Edit = () => {
  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [designation, setDesignation] = useState();
  const [gender, setGender] = useState();
  const [course, setCourse] = useState();
  const [file, setFile] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getuser/" + id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setEmail(result.data.email);
        setMobile(result.data.mobile);
        setDesignation(result.data.designation);
        setGender(result.data.gender);
        setCourse(result.data.course);
        setFile(result.data.file);
      })
      .catch((err) => console.log(err));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("designation", designation);
    formData.append("gender", gender);
    formData.append("course", course);
    formData.append("file", file);

    axios
      .put("http://localhost:3001/updateuser/" + id, formData)
      .then((result) => {
        console.log(result);
        navigate("/Display");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {/* Navbar */}

      <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-lg">
        <div class="container-fluid">
          <Link to="/Home" class="navbar-brand">
            <p className="bold">Employee Edit</p>
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
      <form onSubmit={Update} class="row g-3 ms-5 me-5 mt-2 ">
        <div class="col-md-10">
          <label for="validationDefault01" class="form-label">
            <p className="bold">Name</p>
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            placeholder="Name"
            value={name}
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
            class="form-control"
            id="validationDefault02"
            placeholder="Email"
            value={email}
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
            class="form-control"
            id="validationDefault02"
            placeholder="Mobile No."
            value={mobile}
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
            value={designation}
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
          <label class="form-label">Gender</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="male"
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
              value="female"
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
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
