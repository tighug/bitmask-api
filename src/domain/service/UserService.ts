import { User } from "../model/User";
import { IUserRepository } from "../repository/IUserRepository";

export class UserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async exists(user: User): Promise<boolean> {
    const duplicatedUser = await this.userRepository.findByName(user.name);
    return duplicatedUser !== undefined;
  }
}
