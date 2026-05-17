import { Router } from "express";
import {
  createBookmark,
  getAllBookmark,
} from "../controllers/bookmark.controller.js";

const router = Router();

router.get("/status", getAllBookmark);
router.post("/data", createBookmark);

export default router;
