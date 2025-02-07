import { NotFoundError, UnauthorizedError } from "../errors/custom-error";
import UserService from "../users/user.service";

export class AuthService {
  private userService: UserService

  constructor() {
    this.userService = new UserService();
  }

  async login(email: string, password: string) {
    const user = await this.userService.getUserByUsername(email);
    if (!user) {
      throw new NotFoundError("User not found")
    }
    if (user.password == password) {
      return user;
    } else {
      throw new UnauthorizedError("Credentials Error");
    }
  }

}
