import express, {Request, Response} from "express";
import { ItemRepository } from "../repositories";

const router = express.Router();
const Cliente = new ItemRepository()
// router.get('/:id', clientController.getClient);

router.get('/', async (req: Request, res: Response) => {
    try {
        console.log(req.url)
        const teste = await Cliente.getItem(5) //fazendo testes direto
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