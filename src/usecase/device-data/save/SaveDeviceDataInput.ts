import { MinLength } from "class-validator";

export class SaveDeviceDataInput {
  @MinLength(3)
  readonly deviceName: string;

  readonly temperature: number;
  readonly humidity: number;
  readonly pressure: number;
  readonly gas: number;

  constructor(props: SaveDeviceDataInput) {
    this.deviceName = props.deviceName;
    this.temperature = props.temperature;
    this.humidity = props.humidity;
    this.pressure = props.pressure;
    this.gas = props.gas;
  }
}
