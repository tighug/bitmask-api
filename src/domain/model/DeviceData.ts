import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class DeviceData {
  @PrimaryGeneratedColumn()
  readonly id?: number;

  @Column()
  readonly deviceName!: string;

  @Column("float")
  readonly temperature!: number;

  @Column("float")
  readonly humidity!: number;

  @Column("float")
  readonly pressure!: number;

  @Column("float")
  readonly gas!: number;

  @CreateDateColumn()
  readonly createdAt?: Date;

  constructor(props?: DeviceData) {
    // This is a hack for TypeORM.
    if (props) {
      this.id = props.id;
      this.deviceName = props.deviceName;
      this.temperature = props.temperature;
      this.humidity = props.humidity;
      this.pressure = props.pressure;
      this.gas = props.gas;
    }
  }
}
