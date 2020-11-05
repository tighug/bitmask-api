import { DeleteSensorInput } from "./DeleteSensorInput";
import { DeleteSensorOutput } from "./DeleteSensorOutput";

export interface IDeleteSensor {
  handle(input: DeleteSensorInput): Promise<DeleteSensorOutput>;
}
