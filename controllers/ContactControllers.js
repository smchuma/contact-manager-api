//* Get all Contact
const getContacts = (req, res) => {
  res.json({
    message: "Get all Contacts",
  });
};

// @ getting single contacts
const getSingleContact = (req, res) => {
  res.json({
    message: `Get single contact for ${req.params.id}`,
  });
};

//! create a contact
const createContact = (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    res.status(400);
    throw new Error("All fields are required");
  }

  res.send({
    name,
    age,
  });
};

//* update a contact
const updateContact = (req, res) => {
  res.json({
    message: `update the contact of ${req.params.id}`,
  });
};

//@delete a contact
const deleteContact = (req, res) => {
  res.json({
    message: `delete the contact of ${req.params.id}`,
  });
};

module.exports = {
  getContacts,
  getSingleContact,
  deleteContact,
  updateContact,
  createContact,
};
