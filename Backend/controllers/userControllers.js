const router = require("express").Router();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// bcrypt
const bcrypt = require("bcrypt");

// ceate a test route
router.get("/test", (req, res) => {
    res.send("Welcome to user API");
  });