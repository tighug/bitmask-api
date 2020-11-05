import { ISensorRepository } from "../../../domain/repository/ISensorRepository";
import { InternalServerError } from "../../../util/HttpException";
import { GetSensorInput } from "./GetSensorInput";
import { GetSensorOutput } from "./GetSensorOutput";
import { IGetSensor } from "./IGetSensor";

export class GetUser implements IGetSensor {
  private readonly sensorRepository: ISensorRepository;

  constructor(sensorRepository: ISensorRepository) {
    this.sensorRepository = sensorRepository;
  }

  async handle(input: GetSensorInput): Promise<GetSensorOutput> {
    const { id } = input;
    if (id !== undefined) {
      return await this.sensorRepository.find(id);
    } else {
      throw new InternalServerError("There's something wrong with the server.");
    }
  }
}
