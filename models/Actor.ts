import mongoose from "mongoose";
import { model, Schema } from "mongoose";

// Created Schema for Database
const actorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

export const Actor = model("Actor", actorSchema);
