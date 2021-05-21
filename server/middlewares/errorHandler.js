function errorHandler(err, req, res, next) {
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).json({
    error: true,
    message: err.message,
  });
}

module.exports = errorHandler;
