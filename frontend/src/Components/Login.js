import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

const Login = () => {


  

  const [formData, setFormData] = useState({
    email: " ",
    password: " ",
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {};

    if (formData.email === " " || formData.email === null) {
      isvalid = false;
      validationErrors.email = "* Email required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isvalid = false;
      validationErrors.email = "* Email is not valid";
    }
    if (formData.password === " " || formData.password === null) {
      isvalid = false;
      validationErrors.password = "* Password required";
    } else if (formData.password.length < 6) {
      isvalid = false;
      validationErrors.password = "* Password length at least 6 char";
    }

  //   axios
  //     .get("http://localhost:8000/users")
  //     .then((result) => {
      
  //       result.data.map((user) => {
  //         if (user.email === formData.email) {
  //           if (user.password === formData.password) {
  //             console.log(result)
  //             alert("Login Successfully");
  //             navigate("/Home");
  //           } else {
  //             isvalid = false;
  //             validationErrors.password = "Wrong Password;";
  //           }
  //         } else if (formData.email !== " ") {
  //           isvalid = false;
  //           validationErrors.email = "Wrong Email;";
  //         }
  //       });
  //       setErrors(validationErrors);
  //       setValid(isvalid);
  //     })
  //     .catch((err) => console.log(err));
  // };

  axios
  .get("http://localhost:8000/users")
  .then((result) => {
    const user = result.data.find((user) => user.email === formData.email);
    if (user) {
      if (user.password === formData.password) {
        alert("Login Successfully");
        navigate("/Home");
      } else {
        isvalid = false;
        validationErrors.password = "Wrong Password";
      }
    } else {
      isvalid = false;
      validationErrors.email = "User not found";
    }
    setErrors(validationErrors);
    setValid(isvalid);
  })
  .catch((err) => console.log(err));
};




  return (
    <div className="bg-imgl">
      {/* Main */}
      <div className="container " id="log">
        <div className="row">
          <div className="col-md-6 offset-md-3 mt-5">
            <div className="signup-form">
              <form
                className="mt-5 border p-4 bg-light shadow"
                onSubmit={handleSubmit}
              >
             
                <p className="text-center " style={{ fontWeight:"bold" }}>Welcome To Login Page</p>

                <div className="row">
                  <div className="mb-3 col-md-12">
                    <label>
                      <b>Email </b> <span className="text-danger">*</span>
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
                      <b> Password </b> <span className="text-danger">*</span>
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
                  <Link to="">
                    <p className="float-end">Forgot Password?</p>
                  </Link>

                  <div className="col-md-12 text-center">
                    <button className="btn btn-primary float-center" id="add" >
                      Login Page
                    </button>
                  </div>
                </div>
                <p className="text-center mt-3 text-secondary">
                  If you don't have account, Please{" "}
                  <Link to="/registration"> Registration </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


