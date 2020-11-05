import { IsInt, MinLength } from "class-validator";

export class RegisterSensorInput {
  @MinLength(3)
  readonly name: string;

  @IsInt()
  readonly ownerId: number;

  constructor(props: RegisterSensorInput) {
    this.name = props.name;
    this.ownerId = props.ownerId;
  }
}
