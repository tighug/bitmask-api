import { IDeviceDataRepository } from "../../../domain/repository/IDeviceDataRepository";
import { IListDeviceData } from "./IListDeviceData";
import { ListDeviceDataInput } from "./ListDeviceDataInput";
import { ListDeviceDataOutput } from "./ListDeviceDataOutput";

export class ListDeviceData implements IListDeviceData {
  private readonly deviceDataRepository: IDeviceDataRepository;

  constructor(deviceDataRepository: IDeviceDataRepository) {
    this.deviceDataRepository = deviceDataRepository;
  }

  async handle(input: ListDeviceDataInput): Promise<ListDeviceDataOutput> {
    const { deviceName, from, to } = input;
    return await this.deviceDataRepository.find(deviceName, from, to);
  }
}
