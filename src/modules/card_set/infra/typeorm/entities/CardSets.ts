import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'card_sets',
})
export class CardSets {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  card_id: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  set_id: number;

  @Column({
    type: 'character varying',
    nullable: false,
  })
  set_code: string;

  @Column({
    type: 'character varying',
    nullable: false,
  })
  set_rarity: string;

  @Column({
    type: 'character varying',
    nullable: false,
  })
  set_rarity_code: string;
}
