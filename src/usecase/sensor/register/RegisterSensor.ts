import { Sensor } from "../../../domain/model/Sensor";
import { ISensorRepository } from "../../../domain/repository/ISensorRepository";
import { IUserRepository } from "../../../domain/repository/IUserRepository";
import { SensorService } from "../../../domain/service/SensorService";
import { ConflictError, NotFoundError } from "../../../util/HttpException";
import { IRegisterSensor } from "./IRegisterSensor";
import { RegisterSensorInput } from "./RegisterSensorInput";
import { RegisterSensorOutput } from "./RegisterSensorOutput";

export class RegiserSensor implements IRegisterSensor {
  private readonly sensorRepository: ISensorRepository;
  private readonly userRepository: IUserRepository;
  private readonly sensorService: SensorService;

  constructor(
    sensorRepository: ISensorRepository,
    userRepository: IUserRepository
  ) {
    this.sensorRepository = sensorRepository;
    this.userRepository = userRepository;
    this.sensorService = new SensorService(sensorRepository);
  }

  async handle(input: RegisterSensorInput): Promise<RegisterSensorOutput> {
    const owner = await this.userRepository.find(input.ownerId);

    if (owner === undefined) throw new NotFoundError("Owner not found.");

    const sensor = new Sensor({ name: input.name, owner });

    if (await this.sensorService.exists(sensor))
      throw new ConflictError("This sensor is already registered.");

    return await this.sensorRepository.save(sensor);
  }
}
