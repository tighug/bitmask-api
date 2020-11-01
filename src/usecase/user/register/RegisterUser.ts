import { User } from "../../../domain/model/User";
import { IUserRepository } from "../../../domain/repository/IUserRepository";
import { UserService } from "../../../domain/service/UserService";
import { ConflictError } from "../../../util/HttpException";
import { IRegisterUser } from "./IRegisterUser";
import { RegisterUserInput } from "./RegisterUserInput";
import { RegisterUserOutput } from "./RegisterUserOutput";

export class RegisterUser implements IRegisterUser {
  private readonly userRepository: IUserRepository;
  private readonly userService: UserService;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
    this.userService = new UserService(userRepository);
  }

  async handle(input: RegisterUserInput): Promise<RegisterUserOutput> {
    const user = new User(input);

    if (await this.userService.exists(user))
      throw new ConflictError("This user is already registered.");

    return await this.userRepository.save(user);
  }
}
