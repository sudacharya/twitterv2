const errorHandler = (req, res, next) => {
  const error = new Error("Not found");
  error.statusCode = 404;
  console.log(error)
  next(error);
}

module.exports = errorHandler;