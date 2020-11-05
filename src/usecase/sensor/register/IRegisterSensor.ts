import { RegisterSensorInput } from "./RegisterSensorInput";
import { RegisterSensorOutput } from "./RegisterSensorOutput";

export interface IRegisterSensor {
  handle(input: RegisterSensorInput): Promise<RegisterSensorOutput>;
}
