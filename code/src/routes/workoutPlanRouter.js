import express from 'express';
import * as WorkoutPlanController from '../controllers/WorkoutPlanController.js';

const router = express.Router();

router.get('/', WorkoutPlanController.getWorkoutPlans);
router.get('/:id', WorkoutPlanController.getWorkoutPlanById);
router.post('/', WorkoutPlanController.createWorkoutPlan);
router.put('/:id', WorkoutPlanController.updateWorkoutPlan);
router.delete('/:id', WorkoutPlanController.deleteWorkoutPlanById);

export default router;
