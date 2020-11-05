import { Sensor } from "../model/Sensor";
import { ISensorRepository } from "../repository/ISensorRepository";

export class SensorService {
  private sensorRepository: ISensorRepository;

  constructor(sensorRepository: ISensorRepository) {
    this.sensorRepository = sensorRepository;
  }

  async exists(sensor: Sensor): Promise<boolean> {
    const duplicatedSensor = await this.sensorRepository.findByName(
      sensor.name
    );
    return duplicatedSensor !== undefined;
  }
}
