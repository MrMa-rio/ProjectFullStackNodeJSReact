import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";
import {
  AuthRouter,
  ClientRouter,
  ItemOrderRouter,
  ItemRouter,
  OrderRouter,
} from "./routers";
const app = express();

app.use(morgan("tiny"));

app.use(cors());

app.use(helmet());

app.use(express.json());

// app.use((req: Request, res: Response, next: NextFunction) => {
//     res.send("Hello World");
// })
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/clientes", ClientRouter);

app.use("/pedidos", OrderRouter);

app.use("/items", ItemRouter);

app.use("/itemspedidos", ItemOrderRouter);

app.use("/auth", AuthRouter);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send(error.message);
});

export default app;
