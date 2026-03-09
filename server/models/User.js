const mongoose = require("mongoose");
//destructure mongoose
const { Schema, model } = mongoose;
const UserSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, min: 8 },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

const UserModel = model("User", UserSchema);
module.exports = UserModel;
