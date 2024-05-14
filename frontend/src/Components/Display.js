import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Display = () => {
  const [user, setUser] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => setUser(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this")) {
      axios
        .delete("http://localhost:3001/deleteuser/" + id)
        .then((res) => {
          console.log(res);
          setUser(user.filter((item) => item._id !== id));
        })
        .catch((err) => console.log(err));
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = user.filter(
    (user) =>
      user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary lg-shadow">
        <div className="container-fluid">
          <Link to="/Home" className="navbar-brand">
            <p className="bold">Display Employee Data</p>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearch}
              />
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
      <div className="container mt-5 ">
        <table className="table table-hover">
          <thead>
            <tr className="table-warning">
              <th scope="row">Unique Id</th>
              <th scope="row">Image</th>
              <th scope="row">Name</th>
              <th scope="row">Email</th>
              <th scope="row">Mobile No</th>
              <th scope="row">Designation</th>
              <th scope="row">Gender</th>
              <th scope="row">Course</th>
              <th scope="row">Create Date</th>
              <th scope="row">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={`http://localhost:3001/upload/${user.file}`}
                    style={{ width: "5rem", height: "5rem" }}
                    alt="Uploaded File"
                  />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.designation}</td>
                <td>{user.gender}</td>
                <td>{user.course}</td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                <td>
                  <Link to={`/Edit/${user._id}`}>
                    <i
                      className="fa fa-edit m-1"
                      style={{ fontSize: "1.8rem", color: "black" }}
                    ></i>
                  </Link>
                  <Link onClick={() => handleDelete(user._id)}>
                    <i
                      className="fa fa-trash m-1"
                      style={{ fontSize: "1.8rem", color: "black" }}
                    ></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Display;
