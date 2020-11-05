import { User } from "../../../domain/model/User";

export type RegisterSensorOutput = {
  readonly id?: number;
  readonly owner?: User;
  readonly name: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
};
