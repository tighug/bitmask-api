import { MinLength } from "class-validator";

export class RegisterUserInput {
  @MinLength(3)
  readonly name: string;

  @MinLength(3)
  readonly password: string;

  constructor(props: RegisterUserInput) {
    this.name = props.name;
    this.password = props.password;
  }
}
