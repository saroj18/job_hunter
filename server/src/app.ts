import { userRouter } from "./route/user-route";
import express, { NextFunction, Request, Response } from "express";
import { ApiError } from "./utils/ApiError";
import { globalErrorHandler } from "./utils/GlobalErrorHandler";

export const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use((err: ApiError, req: Request, resp: Response, next: NextFunction) => {
  globalErrorHandler(err, resp);
});
