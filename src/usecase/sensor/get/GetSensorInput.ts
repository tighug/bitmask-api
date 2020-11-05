import { IsInt } from "class-validator";

export class GetSensorInput {
  @IsInt()
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}
