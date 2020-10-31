import { User } from "../model/User";

export interface IUserRepository {
  save(user: User): Promise<User>;
  findAll(): Promise<User[]>;
  findByName(name: string): Promise<User | undefined>;
}
