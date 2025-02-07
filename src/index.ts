import express, { Request, Response } from 'express';
import { UserController } from './users/user.controller';
import {AuthController} from "./auth/auth.controller";

const app = express();
const port = 8080;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.use('/api/users', new UserController().getRouter())
app.use('/api/users', new AuthController().getRouter())

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
