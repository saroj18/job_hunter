import { User } from "../models/user.models";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/AsyncHandler";
import { UserZodSchema } from "../zodSchema/user-zod-schema";

export const signupUser = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;

  const userError = UserZodSchema.safeParse({ email, password, role });

  if (!userError.success) {
    throw new ApiError(400, userError.error.message);
  }

  const findUser = await User.findOne({ email });

  if (findUser) {
    throw new ApiError(400, "User already exists");
  }

  const createUser = await User.create({
    email,
    password,
    roles: role,
  });

  if (!createUser) {
    throw new ApiError(400, "failed to save on db");
  }
  res
    .status(201)
    .json(new ApiResponse(201, "User created successfully", createUser));
});

export const loginUser = asyncHandler(async (req, resp) => {
  const { email, password } = req.body;

  const loginError = UserZodSchema.safeParse({ email, password });

  if (!loginError.success) {
    throw new ApiError(400, loginError.error.message);
  }

  const findUser = await User.findOne({ email });

  if (!findUser) {
    throw new ApiError(400, "user not found");
  }

  const checkPassword = await findUser.isPasswordCorrect(password);

  if (!checkPassword) {
    throw new ApiError(400, "incorrect password");
  }

  const accessToken = findUser.generateAccessToken();
  const refreshToken = findUser.generateRefreshToken();

  resp.cookie("accessToken", accessToken, {
    maxAge: Date.now() + 10000000,
    httpOnly: true,
    secure: true,
  });

  resp.status(200).json(new ApiResponse(200, "login successfully", findUser));
});

export const checkUser = asyncHandler(async (req, resp) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    throw new ApiError(404, "user not found");
  }
  resp.status(200).json(new ApiResponse(200, "user found", user));
});
