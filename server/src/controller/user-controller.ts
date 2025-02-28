import { User } from "../models/user.models";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/AsyncHandler";
import { UserZodSchema } from "../zodSchema/user-zod-schema";

export const signupUser = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;

  const userError = UserZodSchema.safeParse({ email, password, role });

  if (!userError.success) {
    throw new ApiError(userError.error.message, 400);
  }

  const findUser = await User.findOne({ email });

  if (findUser) {
    throw new ApiError("User already exists", 400);
  }

  const createUser = await User.create({
    email,
    password,
    roles: role,
  });

  if (!createUser) {
    throw new ApiError("failed to save on db");
  }
  res
    .status(201)
    .json(new ApiResponse("User created successfully", 201, createUser));
});

export const loginUser = asyncHandler(async (req, resp) => {
  const { email, password } = req.body;

  const loginError = UserZodSchema.safeParse({ email, password });

  if (!loginError.success) {
    throw new ApiError(loginError.error.message, 400);
  }

  const findUser = await User.findOne({ email });

  if (!findUser) {
    throw new ApiError("user not found");
  }

  const checkPassword = await findUser.isPasswordCorrect(password);

  if (!checkPassword) {
    throw new ApiError("incorrect password");
  }

  const accessToken = findUser.generateAccessToken();
  const refreshToken = findUser.generateRefreshToken();

  resp.cookie("accessToken", accessToken, {
    maxAge: Date.now() + 10000000,
    httpOnly: true,
    secure: true,
  });

  resp.status(200).json(new ApiResponse("login successfully", 200, findUser));
});
