import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerUi from "swagger-ui-express"
import swaggerDocs from "./swagger.json"
import { OrderRouter, AuthRouter, ClientRouter } from './routers';
const app = express();

app.use(morgan('tiny'));

app.use(cors());

app.use(helmet());

app.use(express.json());

// app.use((req: Request, res: Response, next: NextFunction) => {
//     res.send("Hello World");
// })
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/clients', ClientRouter);

app.use('/orders', OrderRouter);

app.use('/auth', AuthRouter);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message);
})



export default app;