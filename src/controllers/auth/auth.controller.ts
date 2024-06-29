import { decorators } from "tsyringe";
import { UserService } from "./auth.service";
import { Request, Response } from "express";

@decorators.singleton()
export class AuthController {
  constructor(private userService: UserService) {}

  async login(request: Request, response: Response) {
    let { username, password } = request.body;
    await this.userService.login({ password, username });
    response.status(200).json({ msg: "Login successfully!" });
  }
}