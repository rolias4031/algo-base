import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Entity for the 'user' table.

@Entity()
export class User {
  // required PGC that autoincrements
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @Column({
    unique: true,
  })
  api_key: string;
}
