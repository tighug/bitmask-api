import { ListUserOutput } from "./ListUserOutput";

export interface IListUser {
  handle(): Promise<ListUserOutput>;
}
