import { RegisterUserInput } from "./RegisterUserInput";
import { RegisterUserOutput } from "./RegisterUserOutput";

export interface IRegisterUser {
  handle(input: RegisterUserInput): Promise<RegisterUserOutput>;
}
