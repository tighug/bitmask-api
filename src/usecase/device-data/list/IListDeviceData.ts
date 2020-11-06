import { ListDeviceDataInput } from "./ListDeviceDataInput";
import { ListDeviceDataOutput } from "./ListDeviceDataOutput";

export interface IListDeviceData {
  handle(input: ListDeviceDataInput): Promise<ListDeviceDataOutput>;
}
