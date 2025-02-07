import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Middleware (optional, just for clarity)
app.use(express.json());

// Simple route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
