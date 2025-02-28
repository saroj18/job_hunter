import { asyncHandler } from "../utils/AsyncHandler";
import { ApiError } from "../utils/ApiError";
import { User } from "../models/user.models";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

type CustomRequest={
    req:Request
    user?:any
}

interface DecodeToken extends JwtPayload{
    _id:string
}

const verifyJwt = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken

    if (!token) {
      throw new ApiError(401, "Unauthorized");
    }
    console.log(token);
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!) as DecodeToken;

    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    ) 

    if (!user) {
      throw new ApiError(401, "Unauthorized or the token has expired");
    }
    req.user = user;

    next();
  } catch (error:any) {
    throw new ApiError(
      401,
  error.message||"Unauthorized or the token has expired"
    );
  }
});

export const checkUser = () => {
  return asyncHandler(async (req, res, next) => {
    if (!req.user) {
      throw new ApiError(401, "Unauthorized");
    }
    if (req.user?.role!="user") {
      throw new ApiError(
        403,
        "You do not have permission to perform this action"
      );
    }
    next();
  });
};
