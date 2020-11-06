import { DeviceData } from "../../../domain/model/DeviceData";
import { InternalServerError } from "../../../util/HttpException";
import { DeviceDataRO } from "./DeviceDataRO";
import { DateTime } from "luxon";
import { DeviceDatasRO } from "./DeviceDatasRO";

export class DeviceDataSerializer {
  serialize(deviceData: DeviceData): DeviceDataRO {
    return {
      deviceData: this.toJson(deviceData),
    };
  }

  serializeArray(deviceDatas: DeviceData[]): DeviceDatasRO {
    const modDeviceDatas = deviceDatas.map(this.toJson);
    return {
      deviceDataCount: modDeviceDatas.length,
      deviceDatas: modDeviceDatas,
    };
  }

  private toJson(deviceData: DeviceData) {
    const { id, createdAt, ...props } = deviceData;

    if (id === undefined)
      throw new InternalServerError("The id must not be undefined.");
    if (createdAt === undefined)
      throw new InternalServerError("The createdAt must not be undefined.");

    return {
      id,
      createdAt: DateTime.fromJSDate(createdAt).toFormat("yyyy-LL-dd-HH-mm-ss"),
      ...props,
    };
  }
}
