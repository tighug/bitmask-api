import { Sensor } from "../model/Sensor";

export interface ISensorRepository {
  save(sensor: Sensor): Promise<Sensor>;
  findAll(): Promise<Sensor[]>;
  find(id: number): Promise<Sensor | undefined>;
  findByName(name: string): Promise<Sensor | undefined>;
  remove(sensor: Sensor): Promise<Sensor>;
}
