const { constants } = require("../constants/constants");

const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  console.log(statusCode);

  if (statusCode === constants.VALIDATION_ERROR) {
    res.json({
      "title: ": "Validation Failed",
      message: error.message,
    });
  }
};

module.exports = errorHandler;
