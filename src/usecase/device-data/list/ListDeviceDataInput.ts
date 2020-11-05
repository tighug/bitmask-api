import { MinLength } from "class-validator";

export class ListDeviceDataInput {
  @MinLength(3)
  readonly deviceName?: string;

  readonly from?: Date;
  readonly to?: Date;

  constructor(props: ListDeviceDataInput) {
    this.deviceName = props.deviceName;
    this.from = props.from;
    this.to = props.to;
  }
}
