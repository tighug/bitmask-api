import { User } from "../model/User";

export interface IUserRepository {
  save(user: User): Promise<User>;
  findAll(): Promise<User[]>;
  find(id: number): Promise<User | undefined>;
  findByName(name: string): Promise<User | undefined>;
  remove(user: User): Promise<User>;
}
