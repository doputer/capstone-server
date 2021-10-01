import { Inquire } from 'src/inquire/inquire.entity';
import { Reservation } from 'src/reservation/reservation.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column({ select: false })
  password: string;

  @Column()
  tel: string;

  @Column({ default: 0 })
  role: number;

  @Column()
  dept: string;

  @Column()
  job: string;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToOne(() => Inquire, inquire => inquire.user)
  @JoinColumn()
  inquire: Inquire;

  @OneToMany(() => Reservation, reservation => reservation.user)
  reservations: Reservation[];
}
