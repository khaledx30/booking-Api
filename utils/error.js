export const createError = (status, message) => {
  const err = new Error();
  err.status = status;
  message.err = message;
  return err;
};
