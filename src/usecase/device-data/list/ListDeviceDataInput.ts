import { MinLength } from "class-validator";

export class ListDeviceDataInput {
  @MinLength(3)
  readonly deviceName?: string;

  readonly from?: Date;
  readonly to?: Date;

  constructor(props: ListDeviceDataInput) {
    this.deviceName = props.deviceName;
    this.from = props.from || new Date(2020, 1, 1, 0, 0, 0);
    this.to = props.to || new Date(3020, 1, 1, 0, 0, 0);
  }
}
