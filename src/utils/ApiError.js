class ApiError extends Error {
  constructor(
    statusCode,
    massege = "Something went wrong",
    errors = [],
    statck = ""
  ) {
    super(massege);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (statck) {
      this.stack = statck;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
