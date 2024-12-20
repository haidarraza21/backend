const asyncHandler = (requestHendler) => {
  (req, res, next) => {
    Promise.resolve(requestHendler(req, res, next)).catch((err) => next(err));
  };
};
export { asyncHandler };
