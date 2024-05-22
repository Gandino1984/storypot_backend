import mongoose from "mongoose";

// Define the schema for the resource data
const resourceSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ["text", "image", "audio", "video", "mixed"],
    default: "text",
  },
  title: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
  fullDescription: {
    type: String,
  },
  fkUsers: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "user", // Reference to the user model
    },
  ],
  fkProject: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "project", // Reference to the project model
    },
  ],
});

// Create the resource model using the defined schema
const resourceModel = mongoose.model("resource", resourceSchema);

// Export the resource model for use in other files
export default resourceModel;