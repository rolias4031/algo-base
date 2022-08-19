import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Algo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  name: string;

  @Column({
    unique: true,
  })
  displayName: string;

  @Column({})
  algoType: string;

  @Column({})
  description: string;

  @Column({})
  timeCompBest: string;

  @Column()
  spaceCompBest: string;

  @Column()
  timeCompAvg: string;

  @Column()
  spaceCompAvg: string;
}
