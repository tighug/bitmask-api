import express, { Request, Response } from "express";
import { createConnection } from "typeorm";
import { DeviceDataController } from "../interface/controller/DeviceDataController";
import { UserController } from "../interface/controller/UserController";
import { DeviceDataRepository } from "../interface/database/DeviceDataRepository";
import { UserRepository } from "../interface/database/UserRepository";
import { ListDeviceData } from "../usecase/device-data/list/ListDeviceData";
import { SaveDeviceData } from "../usecase/device-data/save/SaveDeviceData";
import { DeleteUser } from "../usecase/user/delete/DeleteUser";
import { GetUser } from "../usecase/user/get/GetUser";
import { ListUser } from "../usecase/user/list/ListUser";
import { RegisterUser } from "../usecase/user/register/RegisterUser";

const router = express.Router();

createConnection().then((connection) => {
  const userRepository = new UserRepository(connection);
  const deviceDataRepository = new DeviceDataRepository(connection);

  const registerUser = new RegisterUser(userRepository);
  const getUser = new GetUser(userRepository);
  const listUser = new ListUser(userRepository);
  const deleteUser = new DeleteUser(userRepository);
  const saveDeviceData = new SaveDeviceData(deviceDataRepository);
  const listDeviceData = new ListDeviceData(deviceDataRepository);
  const userController = new UserController(
    registerUser,
    getUser,
    listUser,
    deleteUser
  );
  const deviceDataController = new DeviceDataController(
    saveDeviceData,
    listDeviceData
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

  router.post("/device-datas", async (req: Request, res: Response) => {
    await deviceDataController.save(req, res);
  });

  router.get("/device-datas", async (req: Request, res: Response) => {
    await deviceDataController.list(req, res);
  });
});

export default router;
