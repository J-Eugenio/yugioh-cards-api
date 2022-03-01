import { CardSets } from 'src/modules/card_set/infra/typeorm/entities/CardSets';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  //Relacionamentos

  @OneToMany(() => CardSets, (cardSets) => cardSets.set)
  cardSets: CardSets;
}
