import { DeviceData } from "../model/DeviceData";

export interface IDeviceDataRepository {
  save(sensorData: DeviceData): Promise<DeviceData>;
  find(deviceName?: string, from?: Date, to?: Date): Promise<DeviceData[]>;
}
