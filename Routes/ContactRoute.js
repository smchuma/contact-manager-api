const express = require("express");
const {
  getContacts,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/ContactControllers");
const router = express.Router();

router.route("/").get(getContacts);

router.route("/:id").get(getSingleContact);

router.route("/").post(createContact);

router.route("/:id").patch(updateContact);

router.route("/:id").delete(deleteContact);
module.exports = router;
