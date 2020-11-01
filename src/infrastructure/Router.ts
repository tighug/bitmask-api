import express, { Request, Response } from "express";
import { createConnection } from "typeorm";
import { UserController } from "../interface/controller/UserController";
import { UserRepository } from "../interface/database/UserRepository";
import { DeleteUser } from "../usecase/user/delete/DeleteUser";
import { GetUser } from "../usecase/user/get/GetUser";
import { ListUser } from "../usecase/user/list/ListUser";
import { RegisterUser } from "../usecase/user/register/RegisterUser";

const router = express.Router();

createConnection().then((connection) => {
  const userRepository = new UserRepository(connection);

  const registerUser = new RegisterUser(userRepository);
  const getUser = new GetUser(userRepository);
  const listUser = new ListUser(userRepository);
  const deleteUser = new DeleteUser(userRepository);
  const userController = new UserController(
    registerUser,
    getUser,
    listUser,
    deleteUser
  );

  router.get("/users/:id", async (req: Request, res: Response) => {
    await userController.get(req, res);
  });

  router.get("/users", async (req: Request, res: Response) => {
    await userController.list(req, res);
  });

  router.post("/users", async (req: Request, res: Response) => {
    await userController.register(req, res);
  });

  router.delete("/users/:id", async (req: Request, res: Response) => {
    await userController.delete(req, res);
  });
});

export default router;
