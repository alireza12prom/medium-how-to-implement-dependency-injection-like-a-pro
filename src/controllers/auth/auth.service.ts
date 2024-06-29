import { decorators } from "tsyringe";

@decorators.injectable()
export class UserService {
  constructor() {}

  async login(input: { username: string, password: string }) {
    /**
     * Your logic here
     */
    return {};
  }
}