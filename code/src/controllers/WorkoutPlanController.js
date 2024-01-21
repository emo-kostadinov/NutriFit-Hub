import WorkoutPlanService from '../services/WorkoutPlanService.js';

export async function getWorkoutPlans(req, res) {
  try {
    const workoutPlans = await WorkoutPlanService.getAll();
    res.json(workoutPlans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getWorkoutPlanById(req, res) {
  const { id } = req.params;
  try {
    const workoutPlan = await WorkoutPlanService.getById(id);
    res.json(workoutPlan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createWorkoutPlan(req, res) {
  const { title, description, duration } = req.body;
  try {
    const result = await WorkoutPlanService.create(title, description, duration);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateWorkoutPlan(req, res) {
  const { id } = req.params;
  const { title, description, duration } = req.body;
  try {
    const result = await WorkoutPlanService.update(id, title, description, duration);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteWorkoutPlanById(req, res) {
  const { id } = req.params;
  try {
    const result = await WorkoutPlanService.deleteById(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
