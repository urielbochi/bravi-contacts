const express = require("express");
const router = express.Router();
const createUser = require("../Controller/User/create")
const deleteUser = require("../Controller/User/delete")


router.delete("/:id", deleteUser);
router.post("/", createUser);

module.exports = router;