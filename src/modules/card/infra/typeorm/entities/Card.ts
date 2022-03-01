import { CardSets } from 'src/modules/card_set/infra/typeorm/entities/CardSets';
import { Images } from 'src/modules/Image/infra/typeorm/entities/Images';
import { Race } from 'src/modules/race/infra/typeorm/entities/Race';
import { Type } from 'src/modules/type/infra/typeorm/entities/Type';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity({
  name: 'cards',
})
class Card {
  @PrimaryColumn()
  id: number;

  @Column({
    type: 'character varying',
    nullable: false,
  })
  name: string;

  @Column({
    type: 'character varying',
    nullable: false,
  })
  name_pt: string;

  @Column({
    type: 'integer',
    nullable: true,
    select: false,
  })
  type?: number;

  @Column({
    type: 'character varying',
    nullable: false,
  })
  desc: string;

  @Column({
    type: 'character varying',
    nullable: false,
  })
  desc_pt: string;

  @Column({
    type: 'integer',
    nullable: true,
  })
  atk?: number;

  @Column({
    type: 'integer',
    nullable: true,
  })
  def?: number;

  @Column({
    type: 'integer',
    nullable: true,
  })
  level?: number;

  @Column({
    type: 'integer',
    nullable: true,
    select: false,
  })
  race?: number;

  @Column({
    type: 'character varying',
    nullable: true,
  })
  attribute?: string;

  //Relacionamentos
  @OneToMany(() => Images, (images) => images.card)
  images: Images[];

  @OneToOne(() => Race)
  @JoinColumn({ name: 'race' })
  race_r: Race;

  @OneToOne(() => Type)
  @JoinColumn({ name: 'type' })
  type_r: Type;

  @OneToMany(() => CardSets, (cardSets) => cardSets.card)
  card_sets: CardSets[];
}

export { Card };
