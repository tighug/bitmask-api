import { Connection, Repository } from "typeorm";
import { User } from "../../domain/model/User";
import { IUserRepository } from "../../domain/repository/IUserRepository";

export class UserRepository implements IUserRepository {
  private readonly repository: Repository<User>;

  constructor(connection: Connection) {
    this.repository = connection.getRepository(User);
  }

  async save(user: User): Promise<User> {
    return await this.repository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  async find(id: number): Promise<User | undefined> {
    return await this.repository.findOne({ id });
  }

  async findByName(name: string): Promise<User | undefined> {
    return await this.repository.findOne({ name });
  }

  async remove(user: User): Promise<User> {
    // This is hack for TypeORM remove.
    const original = { ...user };
    await this.repository.remove(user);
    return original;
  }
}
