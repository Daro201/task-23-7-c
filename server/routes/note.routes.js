import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

// Add a new note
router.route('/notes').post(NoteController.addNote);

// Edit a note
router.route('/notes/:noteId').put(NoteController.editNote);

// Delete a note by noteId
router.route('/notes/:noteId').delete(NoteController.deleteNote);

export default router;