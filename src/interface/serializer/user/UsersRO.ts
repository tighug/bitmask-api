export interface UsersRO {
  readonly userCount: number;
  readonly users: {
    readonly id: number;
    readonly name: string;
    readonly password: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
  }[];
}
