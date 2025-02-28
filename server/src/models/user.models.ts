import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface IUser extends Document {
  name?: string;
  email: string;
  password: string;
<<<<<<< HEAD
  role: "user" | "admin";
=======
  roles: ("user" | "recruiter")[];
  resume:{type:String},
>>>>>>> ca7dd3379003a3473cc7dcf6115459ec5d2fc70d
  location?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  refreshToken?: string;
  isPasswordCorrect(password: string): Promise<boolean>;
  generateAccessToken(): string;
  generateRefreshToken(): string;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      required: true,
<<<<<<< HEAD
      default: "user",
      enum: ["user", "admin"],
=======
      default: ["user"],
      enum: ["user", "recruiter"],
>>>>>>> ca7dd3379003a3473cc7dcf6115459ec5d2fc70d
    },
    resume:{type:String},
    location: { type: String },
    linkedin: { type: String },
    github: { type: String },
    portfolio: { type: String },
    refreshToken: { type: String },
  },
  { timestamps: true }
);

UserSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

UserSchema.methods.isPasswordCorrect = async function (
  password: string
): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

UserSchema.methods.generateAccessToken = function (): string {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET as string,
    { expiresIn: "1d" }
  );
};

UserSchema.methods.generateRefreshToken = function (): string {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET as string,
    { expiresIn: "7d" }
  );
};

const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export { User, IUser };
