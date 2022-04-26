const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");

const User = require("../models").user;
const Students = require("../models").student;

const { SALT_ROUNDS } = require("../config/constants");

const router = new Router();

// GET ALL  STUDENTS // use the token to get the shit
router.get("/", async (req, res) => {
  try {
    const students = await Students.findAll();
    console.log("HALLO", students);

    res.send(students);
  } catch (e) {
    console.log(e.message);
  }
});

console.log("sowieso hallo");

module.exports = router;
