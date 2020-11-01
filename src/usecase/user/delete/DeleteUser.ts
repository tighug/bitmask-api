import { IUserRepository } from "../../../domain/repository/IUserRepository";
import { NotFoundError } from "../../../util/HttpException";
import { DeleteUserInput } from "./DeleteUserInput";
import { DeleteUserOutput } from "./DeleteUserOutput";
import { IDeleteUser } from "./IDeleteUser";

export class DeleteUser implements IDeleteUser {
  private readonly userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async handle(input: DeleteUserInput): Promise<DeleteUserOutput> {
    const user = await this.userRepository.find(input.id);

    if (user === undefined) throw new NotFoundError("User not found.");

    return await this.userRepository.remove(user);
  }
}
