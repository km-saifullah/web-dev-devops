import { Router } from "express";
import {
  createBookmark,
  getAllBookmark,
  updateBookmark,
} from "../controllers/bookmark.controller.js";

const router = Router();

router.get("/status", getAllBookmark);
router.post("/data", createBookmark);
router.put("/update-bookmark/:id", updateBookmark);

export default router;
