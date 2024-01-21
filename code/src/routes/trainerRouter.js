import express from 'express';
import * as TrainerController from '../controllers/TrainerController.js';

const router = express.Router();

router.get('/', TrainerController.getTrainers);
router.get('/:id', TrainerController.getTrainerById);
router.post('/', TrainerController.createTrainer);
router.put('/:id', TrainerController.updateTrainer);
router.delete('/:id', TrainerController.deleteTrainerById);

export default router;
