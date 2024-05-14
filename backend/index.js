const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/user");
const multer = require("multer");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/task");

app.use("/upload", express.static(path.join(__dirname, "upload")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  userModel
    .find({})
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.post("/createuser", upload.single("file"), (req, res) => {
  const { name, email, mobile, designation, gender, course } = req.body;
  const newUser = new userModel({
    name: name,
    email: email,
    mobile: mobile,
    designation: designation,
    gender: gender,
    course: course,
    file: req.file.filename,
    createdAt: new Date() 
  });

  newUser
    .save()
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.get("/getuser/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findById({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.put("/updateuser/:id", upload.single("file"), (req, res) => {
  const id = req.params.id;
  userModel
    .findByIdAndUpdate(
      { _id: id },
      {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        designation: req.body.designation,
        gender: req.body.gender,
        course: req.body.course,
        file: req.file.filename,
      }
    )
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.delete("/deleteuser/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findOneAndDelete({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

// backend Port
app.listen(3001, () => {
  console.log("Server is runing");
});
