import { ListSensorOutput } from "./ListSensorOutput";

export interface IListSensor {
  handle(): Promise<ListSensorOutput>;
}
