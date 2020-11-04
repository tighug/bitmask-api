import { IsInt } from "class-validator";

export class DeleteUserInput {
  @IsInt()
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}
