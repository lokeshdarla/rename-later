import {AuthService} from "./auth.service";
import {Router} from "express";
import express from "express";
import {Request,Response} from "express";

export class AuthController {
    private authService: AuthService;
    private router: Router;
    constructor() {
        this.authService = new AuthService();
        this.router = express.Router();

        this.router.post("/", this.login.bind(this));
    }

    public getRouter(): Router {
        return this.router;
    }

    async login(req:Request, res:Response) {
        const {email, password} = req.body;
        const result=await  this.authService.login(email, password);
        res.status(200).send(result);
    }
}