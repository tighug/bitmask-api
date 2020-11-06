import { DeviceData } from "../../../domain/model/DeviceData";
import { IDeviceDataRepository } from "../../../domain/repository/IDeviceDataRepository";
import { ISaveDeviceData } from "./ISaveDeviceData";
import { SaveDeviceDataInput } from "./SaveDeviceDataInput";
import { SaveDeviceDataOutput } from "./SaveDeviceDataOutput";

export class SaveDeviceData implements ISaveDeviceData {
  private readonly deviceDataRepository: IDeviceDataRepository;

  constructor(deviceDataRepotiroy: IDeviceDataRepository) {
    this.deviceDataRepository = deviceDataRepotiroy;
  }

  async handle(input: SaveDeviceDataInput): Promise<SaveDeviceDataOutput> {
    const deviceData = new DeviceData(input);
    return await this.deviceDataRepository.save(deviceData);
  }
}
