import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Sensor } from "./Sensor";

@Entity()
export class SensorData {
  @PrimaryGeneratedColumn()
  readonly id?: number;

  @ManyToOne(() => Sensor)
  readonly sensor!: Sensor;

  @Column()
  readonly temperature?: number;

  @Column()
  readonly humidity?: number;

  @Column()
  readonly pressure?: number;

  @Column()
  readonly gas?: number;

  @CreateDateColumn()
  readonly createdAt?: Date;

  constructor(props?: SensorData) {
    // This is a hack for TypeORM.
    if (props) {
      this.id = props.id;
      this.sensor = props.sensor;
      this.temperature = props.temperature;
      this.humidity = props.humidity;
      this.pressure = props.pressure;
      this.gas = props.gas;
    }
  }
}
