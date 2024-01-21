import express from 'express';
import * as NutritionController from '../controllers/NutritionController.js';

const router = express.Router();

router.get('/', NutritionController.getAllNutritionInfo);
router.get('/:id', NutritionController.getNutritionById);
router.post('/', NutritionController.createNutrition);
router.put('/:id', NutritionController.updateNutrition);
router.delete('/:id', NutritionController.deleteNutritionById);

export default router;
