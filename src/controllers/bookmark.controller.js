import Bookmark from "../models/bookmark.model.js";

// get all bookmarks
export const getAllBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmark.find({});
    return res.status(200).json({
      status: true,
      message: "Fetach all bookmark data successfully",
      data: bookmark,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: "Error while fetching the bookmark data",
      data: error.message,
    });
  }
};

// create a bookmark
export const createBookmark = async (req, res) => {
  try {
    const { bookmarkTitle, bookmarkUrl } = req.body;

    if (!bookmarkTitle || !bookmarkUrl) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
        data: null,
      });
    }

    const bookmark = await Bookmark.create({ bookmarkTitle, bookmarkUrl });

    return res.status(201).json({
      status: true,
      message: "Bookmark data created successfully",
      data: bookmark,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: "Error while creating the bookmark data",
      data: error.message,
    });
  }
};

// update a bookmark
export const updateBookmark = async (req, res) => {};

// delete a bookmark
export const deleteBookmark = async (req, res) => {};
