import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

const UNAUTHORIZED_ERROR = createError(403, "You are not authorized!");

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      return next(UNAUTHORIZED_ERROR);
    }
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    const { user, params } = req;
    if (user.id === params.id || user.isAdmin) {
      return next();
    }
    next(UNAUTHORIZED_ERROR);
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      return next();
    }
    next(UNAUTHORIZED_ERROR);
  });
};
