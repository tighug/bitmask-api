export interface DeviceDatasRO {
  readonly deviceDataCount: number;
  readonly deviceDatas: {
    readonly id: number;
    readonly deviceName: string;
    readonly temperature: number;
    readonly humidity: number;
    readonly pressure: number;
    readonly gas: number;
    readonly createdAt: string;
  }[];
}
