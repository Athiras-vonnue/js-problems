class Error {
  constructor(message) {
    this.message = message;
    this.name = "Error";
    //this.stack =<call stack>
  }
}
class ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = "ReadError";
  }
}
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super("No property: " + property);
    this.name = "PropertyRequiredError";
    this.property = property;
  }
}
function validateUser(user) {
  if (!user.age) {
    throw new PropertyRequiredError("age");
  }
  if (!user.name) {
    throw new PropertyRequiredError("name");
  }
}

function readUser(json) {
  let user;
  try {
    user = JSON.parse(json);
  } catch (err) {
    if (err instanceof SyntaxError) {
      throw new ReadError("SyntaxError", err);
    } else {
      throw err;
    }
  }
  try {
    validateUser(user);
  } catch (err) {
    if (err instanceof ValidateError) {
      throw new ReadError("Validation Error", err);
    } else {
      throw err;
    }
  }
}
try {
  readUser("{bad json}");
} catch (e) {
  if (e instanceof ReadError) {
    console.log(e);
    console.log("original error: " + e.cause);
  } else {
    throw e;
  }
}
