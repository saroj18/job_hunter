import { Router } from "express";
import { loginUser, signupUser } from "../controller/user-controller";

export const userRouter = Router();

userRouter.route("/signup").post(signupUser);
userRouter.route("/login").post(loginUser);

