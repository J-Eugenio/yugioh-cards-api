import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'sets',
})
export class Set {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'character varying',
    nullable: false,
  })
  set_name: string;

  @Column({
    type: 'character varying',
    nullable: false,
  })
  set_code: string;

  @Column({
    type: 'integer',
    nullable: false,
  })
  num_of_cards: number;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  tcg_date?: Date;
}
