import { Card } from 'src/modules/card/infra/typeorm/entities/Card';
import { Set } from 'src/modules/Set/infra/typeorm/entities/Set';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  //Relacionamentos

  @ManyToOne(() => Card, (card) => card.card_sets)
  @JoinColumn({ name: 'card_id' })
  card: Card;

  @ManyToOne(() => Set, (set) => set.cardSets)
  @JoinColumn({ name: 'set_id' })
  set: Set;
}
