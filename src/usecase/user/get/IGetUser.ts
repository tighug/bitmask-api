import { GetUserInput } from "./GetUserInput";
import { GetUserOutput } from "./GetUserOutput";

export interface IGetUser {
  handle(input: GetUserInput): Promise<GetUserOutput>;
}
