import mongoose from "mongoose";

// Define the schema for the user data
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email uniqueness
  },
  username: {
    type: String,
    required: true,
    unique: true, // Ensure username uniqueness
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["reader", "producer", "editor"], // Enum for user roles
    default: "reader", // Default role is "reader"
  },
  fkResource: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "resource", // Reference to the resource model
    },
  ],
  fkProject: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "project", // Reference to the project model
    },
  ],
});

// Create the user model using the defined schema
const userModel = mongoose.model("user", userSchema);

// Export the user model for use in other files
export default userModel;