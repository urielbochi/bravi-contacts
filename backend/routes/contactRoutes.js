const express = require("express");
const router = express.Router();
const createContact = require("../Controller/Contact/create")

router.get("/", );
router.post("/", createContact);
router.delete("/:id", );
router.patch("/", );

module.exports = router;