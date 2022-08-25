import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// entity for 'ds' table
@Entity()
export class Ds {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  name: string;

  @Column({})
  display_name: string;

  @Column()
  description: string;

  @Column()
  best_for: string;

  @Column()
  examples: string;

  @Column()
  insert_tc: string;

  @Column()
  remove_tc: string;

  @Column()
  access_tc: string;

  @Column()
  search_tc: string;
}
