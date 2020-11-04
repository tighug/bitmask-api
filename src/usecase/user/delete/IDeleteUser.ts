import { DeleteUserInput } from "./DeleteUserInput";
import { DeleteUserOutput } from "./DeleteUserOutput";

export interface IDeleteUser {
  handle(input: DeleteUserInput): Promise<DeleteUserOutput>;
}
