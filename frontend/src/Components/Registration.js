import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    fname: " ",
    lname: " ",
    email: " ",
    password: " ",
    cpassword: " ",
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {};
    if (formData.fname === " " || formData.fname === null) {
      isvalid = false;
      validationErrors.fname = "*First name required";
    }
    if (formData.lname === " " || formData.lname === null) {
      isvalid = false;
      validationErrors.lname = "*Last name required";
    }
    if (formData.email === " " || formData.email === null) {
      isvalid = false;
      validationErrors.email = "*Email required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isvalid = false;
      validationErrors.email = "*Email is not valid";
    }
    if (formData.password === " " || formData.password === null) {
      isvalid = false;
      validationErrors.password = "*Password required";
    } else if (formData.password.length < 6) {
      isvalid = false;
      validationErrors.password = "*Password length at least 6 char";
    }
    if (formData.cpassword !== formData.password) {
      isvalid = false;
      validationErrors.cpassword = "*Password is not match";
    }
    setErrors(validationErrors);
    setValid(isvalid);

    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:8000/users", formData)
        .then((result) => {
          console.log(result)
          alert("Register Successfully");
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="bg-imgl ">
      {/* Main */}
     
      <div className="container"  id="reg">
        <div className="row">
          <div className="col-md-6 offset-md-3 mt-5">
            <div className="signup-form">
              <form
                className="mt-5 border p-4 bg-light shadow"
                onSubmit={handleSubmit}
              >
                
                <p className="text-center" style={{ fontWeight:"bold" }}>Welcome To Registration Page</p>

                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label>
                      <b> First Name </b> <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="fname"
                      className="form-control"
                      placeholder="Enter First Name"
                      onChange={(event) =>
                        setFormData({ ...formData, fname: event.target.value })
                      }
                    />
                    <span className="text-danger">{errors.fname}</span>
                  </div>

                  <div className="mb-3 col-md-6">
                    <label>
                      <b>Last Name </b> <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="Lname"
                      className="form-control"
                      placeholder="Enter Last Name"
                      onChange={(event) =>
                        setFormData({ ...formData, lname: event.target.value })
                      }
                    />
                    <span className="text-danger">{errors.lname}</span>
                  </div>

                  <div className="mb-3 col-md-12">
                    <label>
                      <b> Email</b> <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Email"
                      onChange={(event) =>
                        setFormData({ ...formData, email: event.target.value })
                      }
                    />
                    <span className="text-danger">{errors.email}</span>
                  </div>

                  <div className="mb-3 col-md-12">
                    <label>
                      <b>Password </b> <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter Password"
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          password: event.target.value,
                        })
                      }
                    />
                    <span className="text-danger">{errors.password}</span>
                  </div>
                  <div className="mb-3 col-md-12">
                    <label>
                      <b>Confirm Password </b>{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      name="confirmpassword"
                      className="form-control"
                      placeholder="Confirm Password"
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          cpassword: event.target.value,
                        })
                      }
                    />
                    <span className="text-danger">{errors.cpassword}</span>
                  </div>
                  <div className="col-md-12 text-center">
                    <button className="btn btn-primary" id="add">
                      Signup Now
                    </button>
                  </div>
                </div>
                <p className="text-center mt-3 text-secondary">
                  If you have account, Please <Link to="/">Login Now</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
  
  );
};

export default Registration;



