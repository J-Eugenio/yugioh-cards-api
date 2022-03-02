import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    description: 'ID dos cards sets',
    nullable: false,
    default: Math.floor(Math.random() * 100),
  })
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ApiProperty({
    description: 'ID da carta',
    nullable: false,
    default: Math.floor(Math.random() * 100),
  })
  @Column({
    type: 'integer',
    nullable: false,
  })
  card_id: number;

  @ApiProperty({
    description: 'ID do pacote',
    nullable: false,
    default: Math.floor(Math.random() * 100),
  })
  @Column({
    type: 'integer',
    nullable: false,
  })
  set_id: number;

  @ApiProperty({
    description: 'Cod. da carta dentro do pacote',
    nullable: false,
    default: 'CT13-EN008',
  })
  @Column({
    type: 'character varying',
    nullable: false,
  })
  set_code: string;

  @ApiProperty({
    description: 'Raridade do pacote',
    nullable: false,
    default: 'Ultra Rare',
  })
  @Column({
    type: 'character varying',
    nullable: false,
  })
  set_rarity: string;

  @ApiProperty({
    description: 'Raridade do pacote',
    nullable: false,
    default: '(UR)',
  })
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
