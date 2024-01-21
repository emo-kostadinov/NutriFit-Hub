import express from 'express';
import trainerRouter from './routers/trainerRouter.js'; 
import clientRouter from './routers/clientRouter.js'; 
import workoutPlanRouter from './routers/workoutPlanRouter.js'; 
import nutritionRouter from './routers/nutritionRouter.js'; 
import communicationRouter from './routers/communicationRouter.js'; 

const app = express();
const PORT = 3200;

app.use(express.json());

app.use('/trainers', trainerRouter);
app.use('/clients', clientRouter);
app.use('/workout-plans', workoutPlanRouter);
app.use('/nutritions', nutritionRouter);
app.use('/communications', communicationRouter);

app.listen(PORT, () => {
  console.log(`Server working on Port:${PORT}`);
});
