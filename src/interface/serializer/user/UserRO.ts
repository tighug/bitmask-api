export interface UserRO {
  readonly user: {
    readonly id: number;
    readonly name: string;
    readonly password: string;
    readonly createdAt: string;
    readonly updatedAt: string;
  };
}
