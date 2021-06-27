import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Expose } from 'class-transformer';

@Entity('tags')
class Tag {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  created_At: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_At: Date;

  @Expose({ name: 'nameCustom' })
  nameCustom(): string {
    return `#${this.name}`
  }

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

export { Tag }