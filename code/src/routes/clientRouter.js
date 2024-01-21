import express from 'express';
import * as ClientController from '../controllers/ClientController.js';

const router = express.Router();

router.get('/', ClientController.getClients);
router.get('/:id', ClientController.getClientById);
router.post('/', ClientController.createClient);
router.put('/:id', ClientController.updateClient);
router.delete('/:id', ClientController.deleteClientById);

export default router;
