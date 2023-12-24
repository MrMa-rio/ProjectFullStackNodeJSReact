import { NextFunction, Request, Response } from "express";
import Client from "../models/Client";
// import clientRepository from "../repositories/ClientRepository";

// async function getClient(req: Request, res: Response, next: NextFunction) {
//     const id = req.params.id;
//     const client = await clientRepository.getClient(parseInt(id));
//     if (client)
//         res.json(client);
//     else
//         res.sendStatus(404);
// }

// async function getClients(req: Request, res: Response, next: NextFunction) {
//     const clients = await clientRepository.getClients();
//     res.json(clients);
// }

// async function postClient(req: Request, res: Response, next: NextFunction) {
//     const client = req.body as Client;
//     const result = await clientRepository.addClient(client);
//     if (result)
//         res.status(201).json(result);
//     else
//         res.sendStatus(400);
// }

// async function patchClient(req: Request, res: Response, next: NextFunction) {
//     const id = req.params.id;
//     const client = req.body as Client;
//     const result = await clientRepository.updateClient(parseInt(id), client);
//     if (result)
//         res.json(result);
//     else
//         res.sendStatus(404);
// }

// async function deleteClient(req: Request, res: Response, next: NextFunction) {
//     const id = req.params.id;
//     const success = await clientRepository.deleteClient(parseInt(id));
//     if (success)
//         res.sendStatus(204);
//     else
//         res.sendStatus(404);
// }

// export default {
//     getClient,
//     getClients,
//     postClient,
//     patchClient,
//     deleteClient
// }