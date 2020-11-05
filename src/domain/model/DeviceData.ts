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

  @Column()
  readonly temperature!: number;

  @Column()
  readonly humidity!: number;

  @Column()
  readonly pressure!: number;

  @Column()
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
