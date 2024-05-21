import cors from 'cors';
import express, { Application, Request, Response } from 'express';
const app: Application = express();

// Parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send("Hello, I'm from Naba Al Junoub");
});
export default app;
