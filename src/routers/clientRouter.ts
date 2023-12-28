import express, {Request, Response} from "express";
import { ItemOrderRepository } from "../repositories";
const router = express.Router();
const Cliente = new ItemOrderRepository()
// router.get('/:id', clientController.getClient);

router.get('/', async (req: Request, res: Response) => {
    try {
        const teste = await Cliente.addItemsOrder([{fkItem:1, fkPedido:1, preco_unitario: 1, quantidade:18}]) //fazendo testes direto
        if(teste) res.json(teste)
        
      } catch (error) {
        console.error('Erro na consulta ao banco de dados:', error)
        res.status(500).send('Erro interno do servidor')
      }
});

// router.post('/', clientController.postClient);

// router.patch('/:id', clientController.patchClient);

// router.delete('/:id', clientController.deleteClient);

export default router;