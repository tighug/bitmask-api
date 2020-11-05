import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Sensor {
  @PrimaryGeneratedColumn()
  readonly id?: number;

  @ManyToOne(() => User)
  readonly owner?: User;

  @PrimaryColumn()
  readonly name!: string;

  @CreateDateColumn()
  readonly createdAt?: Date;

  @UpdateDateColumn()
  readonly updatedAt?: Date;

  constructor(props?: Sensor) {
    // This is a hack for TypeORM.
    if (props) {
      this.id = props.id;
      this.owner = props.owner;
      this.name = props.name;
    }
  }
}
