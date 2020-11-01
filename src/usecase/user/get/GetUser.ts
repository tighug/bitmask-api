import { IUserRepository } from "../../../domain/repository/IUserRepository";
import { InternalServerError } from "../../../util/HttpException";
import { GetUserInput } from "./GetUserInput";
import { GetUserOutput } from "./GetUserOutput";
import { IGetUser } from "./IGetUser";

export class GetUser implements IGetUser {
  private readonly userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async handle(input: GetUserInput): Promise<GetUserOutput> {
    const { id } = input;
    if (id !== undefined) {
      return await this.userRepository.find(id);
    } else {
      throw new InternalServerError("There's something wrong with the server.");
    }
  }
}
