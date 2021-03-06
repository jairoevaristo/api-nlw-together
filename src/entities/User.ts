import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from 'uuid';
import { Exclude } from 'class-transformer';

@Entity('users')
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column()
  admin: boolean; 

  @CreateDateColumn({ name: 'created_at' })
  created_At: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_At: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
