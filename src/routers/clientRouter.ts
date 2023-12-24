import express, {Request, Response} from "express";
import ClientRepository from "../repositories/clientRepository";

const router = express.Router();
const Cliente = new ClientRepository()
// router.get('/:id', clientController.getClient);

router.get('/', async (req: Request, res: Response) => {
    try {
        console.log(req.url)
        const teste = await Cliente.getClients() //fazendo testes direto
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