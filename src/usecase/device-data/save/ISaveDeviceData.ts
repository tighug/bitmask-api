import { SaveDeviceDataInput } from "./SaveDeviceDataInput";
import { SaveDeviceDataOutput } from "./SaveDeviceDataOutput";

export interface ISaveDeviceData {
  handle(input: SaveDeviceDataInput): Promise<SaveDeviceDataOutput>;
}
