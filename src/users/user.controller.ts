import express, { Request, Response, Router } from 'express';
import UserService from './user.service';

export class UserController {
  private userService: UserService;
  private router: Router;

  constructor() {
    this.userService = new UserService();
    this.router = express.Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post("/", this.createUser.bind(this));
    this.router.get("/", this.getUsers.bind(this));
  }

  public getRouter(): Router {
    return this.router;
  }

  private async createUser(req: Request, res: Response): Promise<void> {
    const { username, email, password } = req.body;

    try {
      const newUser = await this.userService.createUser(username, email, password);
      res.status(201).json(newUser);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  private async getUsers(req: Request, res: Response): Promise<void> {
    const { page, limit } = req.query;

    try {
      const users = await this.userService.getAllUsers();
      res.status(200).json(users);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
