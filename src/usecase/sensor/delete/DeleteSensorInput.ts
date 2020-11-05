import { IsInt } from "class-validator";

export class DeleteSensorInput {
  @IsInt()
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}
