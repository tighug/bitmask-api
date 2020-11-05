import { GetSensorInput } from "./GetSensorInput";
import { GetSensorOutput } from "./GetSensorOutput";

export interface IGetSensor {
  handle(input: GetSensorInput): Promise<GetSensorOutput>;
}
