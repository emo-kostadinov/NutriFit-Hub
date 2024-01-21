import express from 'express';
import * as CommunicationController from '../controllers/CommunicationController.js';

const router = express.Router();

router.get('/', CommunicationController.getAllMessages);
router.get('/:id', CommunicationController.getMessageById);
router.post('/', CommunicationController.createMessage);
router.put('/:id', CommunicationController.updateMessage);
router.delete('/:id', CommunicationController.deleteMessageById);

export default router;
