import { Sensor } from "../model/Sensor";
import { SensorData } from "../model/SensorData";

export interface ISensorDataRepository {
  save(sensorData: SensorData): Promise<SensorData>;
  find(sensor?: Sensor, from?: Date, to?: Date): Promise<SensorData[]>;
}
