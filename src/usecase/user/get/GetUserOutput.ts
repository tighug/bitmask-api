export type GetUserOutput =
  | {
      readonly id?: number;
      readonly name: string;
      readonly password: string;
      readonly createdAt?: Date;
      readonly updatedAt?: Date;
    }
  | undefined;
