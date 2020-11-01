import { validate } from "class-validator";
import { Request, Response } from "express";
import { DeleteUserInput } from "../../usecase/user/delete/DeleteUserInput";
import { IDeleteUser } from "../../usecase/user/delete/IDeleteUser";
import { GetUserInput } from "../../usecase/user/get/GetUserInput";
import { IGetUser } from "../../usecase/user/get/IGetUser";
import { IListUser } from "../../usecase/user/list/IListUser";
import { IRegisterUser } from "../../usecase/user/register/IRegisterUser";
import { RegisterUserInput } from "../../usecase/user/register/RegisterUserInput";
import { BadRequestError, NotFoundError } from "../../util/HttpException";
import { ErrorSerializer } from "../serializer/error/ErrorSerializer";
import { UserSerializer } from "../serializer/user/UserSerializer";

export class UserController {
  private readonly registerUser: IRegisterUser;
  private readonly getUser: IGetUser;
  private readonly listUser: IListUser;
  private readonly deleteUser: IDeleteUser;
  private readonly userSerializer: UserSerializer;
  private readonly errorSerializer: ErrorSerializer;

  constructor(
    registerUser: IRegisterUser,
    getUser: IGetUser,
    listUser: IListUser,
    deleteUser: IDeleteUser
  ) {
    this.registerUser = registerUser;
    this.getUser = getUser;
    this.listUser = listUser;
    this.deleteUser = deleteUser;
    this.userSerializer = new UserSerializer();
    this.errorSerializer = new ErrorSerializer();
  }

  async register(req: Request, res: Response): Promise<void> {
    try {
      const input = new RegisterUserInput(req.body);
      const errors = await validate(input);

      if (errors.length > 0) {
        throw new BadRequestError(
          "The name & password must be at least 3 characters long."
        );
      }

      const output = await this.registerUser.handle(input);
      const userRO = this.userSerializer.serialize(output);
      res.json(userRO);
    } catch (error) {
      const errorRO = this.errorSerializer.serialize(error);
      res.status(errorRO.error.status).json(errorRO);
    }
  }

  async get(req: Request, res: Response): Promise<void> {
    try {
      const input = new GetUserInput(Number(req.params.id));
      const errors = await validate(input);

      if (errors.length > 0)
        throw new BadRequestError("The id must be integer.");

      const output = await this.getUser.handle(input);

      if (output === undefined) throw new NotFoundError("User not found.");

      const userRO = this.userSerializer.serialize(output);
      res.json(userRO);
    } catch (error) {
      const errorRO = this.errorSerializer.serialize(error);
      res.status(errorRO.error.status).json(errorRO);
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const output = await this.listUser.handle();
      const usersRO = this.userSerializer.serializeArray(output);
      res.json(usersRO);
    } catch (error) {
      const errorRO = this.errorSerializer.serialize(error);
      res.status(errorRO.error.status).json(errorRO);
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const input = new DeleteUserInput(Number(req.params.id));
      const errors = await validate(input);

      if (errors.length > 0)
        throw new BadRequestError("The id must be integer.");

      const output = await this.deleteUser.handle(input);
      const userRO = this.userSerializer.serialize(output);
      res.json(userRO);
    } catch (error) {
      const errorRO = this.errorSerializer.serialize(error);
      res.status(errorRO.error.status).json(errorRO);
    }
  }
}
