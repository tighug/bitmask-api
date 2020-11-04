import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  readonly id?: number;

  @PrimaryColumn()
  readonly name!: string;

  @Column()
  readonly password!: string;

  @CreateDateColumn()
  readonly createdAt?: Date;

  @UpdateDateColumn()
  readonly updatedAt?: Date;

  constructor(props?: User) {
    // This is a hack for TypeORM.
    if (props) {
      this.id = props.id;
      this.name = props.name;
      this.password = props.password;
    }
  }
}
