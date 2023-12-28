import express, {Request, Response} from "express";
import ItemOrderServices from "../services/ItemOrderServices";

const router = express.Router();
const Cliente = new ItemOrderServices()
// router.get('/:id', clientController.getClient);

router.get('/', async (req: Request, res: Response) => {
    try {
        const teste = await Cliente.getItemsOrder(2) //fazendo testes direto
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


//Analisar as promisses da tabela itemOrder!!