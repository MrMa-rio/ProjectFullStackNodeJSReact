import express from "express";
import clientController from "../controllers/clientController";

const router = express.Router();

router.get('/:id', clientController.getClient);

router.get('/', clientController.getClients);

router.post('/', clientController.postClient);

router.patch('/:id', clientController.patchClient);

router.delete('/:id', clientController.deleteClient);

export default router;