export type ListDeviceDataOutput = {
  readonly id?: number;
  readonly deviceName: string;
  readonly temperature: number;
  readonly humidity: number;
  readonly pressure: number;
  readonly gas: number;
  readonly createdAt?: Date;
}[];
