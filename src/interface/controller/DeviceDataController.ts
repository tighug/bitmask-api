import { validate } from "class-validator";
import { Request, Response } from "express";
import { IListDeviceData } from "../../usecase/device-data/list/IListDeviceData";
import { ListDeviceDataInput } from "../../usecase/device-data/list/ListDeviceDataInput";
import { ISaveDeviceData } from "../../usecase/device-data/save/ISaveDeviceData";
import { SaveDeviceDataInput } from "../../usecase/device-data/save/SaveDeviceDataInput";
import { BadRequestError } from "../../util/HttpException";
import { DeviceDataSerializer } from "../serializer/device-data/DeviceDataSerializer";
import { ErrorSerializer } from "../serializer/error/ErrorSerializer";

export class DeviceDataController {
  private readonly saveDeviceData: ISaveDeviceData;
  private readonly listDeviceData: IListDeviceData;
  private readonly deviceDataSerializer: DeviceDataSerializer;
  private readonly errorSerializer: ErrorSerializer;

  constructor(
    saveDeviceData: ISaveDeviceData,
    listDeviceData: IListDeviceData
  ) {
    this.saveDeviceData = saveDeviceData;
    this.listDeviceData = listDeviceData;
    this.deviceDataSerializer = new DeviceDataSerializer();
    this.errorSerializer = new ErrorSerializer();
  }

  async save(req: Request, res: Response): Promise<void> {
    try {
      const input = new SaveDeviceDataInput(req.body);
      const errors = await validate(input);

      if (errors.length > 0) throw new BadRequestError("Bad request");

      const output = await this.saveDeviceData.handle(input);
      const deviceDataRO = this.deviceDataSerializer.serialize(output);
      res.json(deviceDataRO);
    } catch (error) {
      const errorRO = this.errorSerializer.serialize(error);
      res.status(errorRO.error.status).json(errorRO);
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const input = new ListDeviceDataInput(req.query);
      const errors = await validate(input);

      if (errors.length > 0) throw new BadRequestError("Bad request");

      const output = await this.listDeviceData.handle(input);
      const deviceDatasRO = this.deviceDataSerializer.serializeArray(output);
      res.json(deviceDatasRO);
    } catch (error) {
      const errorRO = this.errorSerializer.serialize(error);
      res.status(errorRO.error.status).json(errorRO);
    }
  }
}
