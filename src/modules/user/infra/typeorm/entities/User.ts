import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'user',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'character varying',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'email',
    type: 'character varying',
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    type: 'character varying',
    nullable: false,
    unique: true,
  })
  username: string;

  @Column({
    type: 'character varying',
    nullable: false,
  })
  password: string;

  @Column({
    type: 'character varying',
    nullable: true,
    unique: true,
  })
  api_key?: string;

  @Column({
    type: 'character varying',
    nullable: true,
  })
  instagram_profile?: string;

  @CreateDateColumn({ type: 'timestamp with time zone', nullable: true })
  created_at?: Date;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
    nullable: true,
  })
  updated_at: Date;
}
