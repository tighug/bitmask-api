import { IsInt } from "class-validator";

export class GetUserInput {
  @IsInt()
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}
