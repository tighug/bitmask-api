import { ISensorRepository } from "../../../domain/repository/ISensorRepository";
import { NotFoundError } from "../../../util/HttpException";
import { DeleteSensorInput } from "./DeleteSensorInput";
import { DeleteSensorOutput } from "./DeleteSensorOutput";
import { IDeleteSensor } from "./IDeleteSensor";

export class DeleteSensor implements IDeleteSensor {
  private sensorRepository: ISensorRepository;

  constructor(sensorRepository: ISensorRepository) {
    this.sensorRepository = sensorRepository;
  }

  async handle(input: DeleteSensorInput): Promise<DeleteSensorOutput> {
    const sensor = await this.sensorRepository.find(input.id);

    if (sensor === undefined) throw new NotFoundError("Sensor not found.");

    return await this.sensorRepository.remove(sensor);
  }
}
