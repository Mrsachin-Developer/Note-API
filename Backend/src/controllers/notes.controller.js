import { Note } from "../models/notes.models.js";

// Create Note
const addNotes = async (req, res) => {
  try {
    const { note } = req.body;

    if (!note) {
      return res.status(400).json({
        success: false,
        message: "Please enter a note",
      });
    }

    const newNote = await Note.create({ note });

    return res.status(201).json({
      success: true,
      message: "Note added successfully",
      data: newNote,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to add note",
      error: error.message,
    });
  }
};

// Get ALL Notes
const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: notes.length,
      data: notes,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to fetch notes",
      error: error.message,
    });
  }
};

// Get SINGLE Note
const getSingleNote = async (req, res) => {
  try {
    const { id } = req.params;

    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: note,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to fetch note",
      error: error.message,
    });
  }
};

// Delete Note
const deleteNotes = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Note deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to delete note",
      error: error.message,
    });
  }
};

export { addNotes, getAllNotes, getSingleNote, deleteNotes };
