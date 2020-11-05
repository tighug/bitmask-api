import { ISensorRepository } from "../../../domain/repository/ISensorRepository";
import { IListSensor } from "./IListSensor";
import { ListSensorOutput } from "./ListSensorOutput";

export class ListSensor implements IListSensor {
  private readonly sensorRepository: ISensorRepository;

  constructor(sensorRepository: ISensorRepository) {
    this.sensorRepository = sensorRepository;
  }

  async handle(): Promise<ListSensorOutput> {
    return await this.sensorRepository.findAll();
  }
}
