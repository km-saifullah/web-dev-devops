import mongoose, { Schema } from "mongoose";

const bookmarkSchema = new Schema(
  {
    bookmarkTitle: {
      type: String,
      required: true,
    },
    bookmarkUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

export default Bookmark;
