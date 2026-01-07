import { Router } from "express";
import {
  addNotes,
  deleteNotes,
  getAllNotes,
  getSingleNote,
} from "../controllers/notes.controller.js";

const router = Router();

router.post("/notes", addNotes);
router.get("/notes/:id", getSingleNote);
router.get("/notes/allNotes", getAllNotes);
router.delete("/notes/:id", deleteNotes);

export default router;
