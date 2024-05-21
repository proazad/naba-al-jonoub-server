import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { productRouter } from './app/modules/products/product.route';
const app: Application = express();

// Parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send("Hello, I'm from Naba Al Junoub");
});

// Create New Product In Data Base
app.use('/api/products/', productRouter);

export default app;
