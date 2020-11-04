import { IUserRepository } from "../../../domain/repository/IUserRepository";
import { IListUser } from "./IListUser";
import { ListUserOutput } from "./ListUserOutput";

export class ListUser implements IListUser {
  private readonly userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async handle(): Promise<ListUserOutput> {
    return await this.userRepository.findAll();
  }
}
