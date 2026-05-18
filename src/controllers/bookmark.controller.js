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
    return res.status(500).json({
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
    return res.status(500).json({
      status: false,
      message: "Error while creating the bookmark data",
      data: error.message,
    });
  }
};

// update a bookmark
export const updateBookmark = async (req, res) => {
  try {
    const { bookmarkTitle, bookmarkUrl } = req.body;
    const { id } = req.params;

    // check the req.body is empty or not
    if (!bookmarkTitle && !bookmarkUrl)
      return res
        .status(400)
        .json({ status: false, message: "request body is empty", data: null });

    // check if bookmark exists
    const bookmarkExist = await Bookmark.findById(id);

    if (!bookmarkExist) {
      return res.status(404).json({
        status: false,
        message: "Bookmark does not exist",
        data: null,
      });
    }

    // build dynamic update object
    const updateData = {};

    if (bookmarkTitle !== undefined) updateData.bookmarkTitle = bookmarkTitle;
    if (bookmarkUrl !== undefined) updateData.bookmarkUrl = bookmarkUrl;

    // if no fields provided
    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        status: false,
        message: "No fields provided to update",
        data: null,
      });
    }

    const updatedBookmark = await Bookmark.findByIdAndUpdate(id, updateData);

    return res.status(200).json({
      status: true,
      message: "Bookmark updated successfully",
      data: updatedBookmark,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error while updating the bookmark",
      data: error.message,
    });
  }
};

// delete a bookmark
export const deleteBookmark = async (req, res) => {};
