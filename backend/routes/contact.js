const express = require("express");
const router = express.Router();
const create = require("../Controller/Contact/create")
const remove = require("../Controller/Contact/delete")
const getAll = require("../Controller/Contact/getAll");
const getAllById = require("../Controller/Contact/getAllById");
const update = require("../Controller/Contact/update");


router.get("/", getAll)
router.get("/:id", getAllById)
router.post("/", create);
router.delete("/:id",  remove);
router.put("/:id", update);

module.exports = router;