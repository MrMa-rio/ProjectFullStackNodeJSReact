import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import morgan from 'morgan';
import clientRouter from './routers/clientRouter';
import swaggerUi from "swagger-ui-express"
import swaggerDocs from "./swagger.json"
const app = express();

app.use(morgan('tiny'));

app.use(cors());

app.use(helmet());

app.use(express.json());

// app.use((req: Request, res: Response, next: NextFunction) => {
//     res.send("Hello World");
// })
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/clients', clientRouter);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message);
})



export default app;