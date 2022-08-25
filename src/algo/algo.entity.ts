import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// entity for 'algo' table
@Entity()
export class Algo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  name: string;

  @Column({})
  display_name: string;

  @Column({})
  algo_type: string;

  @Column({})
  description: string;

  @Column({})
  tc_best: string;

  @Column()
  sc_best: string;

  @Column()
  tc_avg: string;

  @Column()
  sc_avg: string;
}
