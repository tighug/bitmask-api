import { Between, Connection, Repository } from "typeorm";
import { DeviceData } from "../../domain/model/DeviceData";
import { IDeviceDataRepository } from "../../domain/repository/IDeviceDataRepository";

export class DeviceDataRepository implements IDeviceDataRepository {
  private readonly repository: Repository<DeviceData>;

  constructor(connection: Connection) {
    this.repository = connection.getRepository(DeviceData);
  }

  async save(sensorData: DeviceData): Promise<DeviceData> {
    return await this.repository.save(sensorData);
  }

  async find(
    deviceName?: string,
    from?: Date,
    to?: Date
  ): Promise<DeviceData[]> {
    const options =
      deviceName !== undefined
        ? { deviceName, createdAt: Between(from, to) }
        : { createdAt: Between(from, to) };
    return await this.repository.find(options);
  }
}
