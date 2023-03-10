const express = require("express");
const {
  getContacts,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/ContactControllers");
const router = express.Router();

router.route("/").get(getContacts).post(createContact);

router
  .route("/:id")
  .get(getSingleContact)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
