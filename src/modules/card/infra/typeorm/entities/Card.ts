import { CardSets } from 'src/modules/card_set/infra/typeorm/entities/CardSets';
import { Images } from 'src/modules/Image/infra/typeorm/entities/Images';
import { Race } from 'src/modules/race/infra/typeorm/entities/Race';
import { Type } from 'src/modules/type/infra/typeorm/entities/Type';
import { ApiProperty } from '@nestjs/swagger';

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
  @ApiProperty({
    description: 'ID do card',
    nullable: false,
    default: Math.floor(Math.random() * 10),
  })
  @PrimaryColumn()
  id: number;

  @ApiProperty({
    description: 'Nome em EN do card',
    nullable: false,
    default: 'Blue-Eyes White Dragon',
  })
  @Column({
    type: 'character varying',
    nullable: false,
  })
  name: string;

  @ApiProperty({
    description: 'Nome em PT-BR do card',
    nullable: false,
    default: 'Dragao branco de olhos azuis',
  })
  @Column({
    type: 'character varying',
    nullable: false,
  })
  name_pt: string;

  @ApiProperty({
    description: 'Tipo da carta',
    nullable: true,
    default: 'Normal Monster',
  })
  @Column({
    type: 'integer',
    nullable: true,
    select: false,
  })
  type?: number;

  @ApiProperty({
    description: 'Descricao da carta em EN',
    nullable: false,
    default:
      'This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.',
  })
  @Column({
    type: 'character varying',
    nullable: false,
  })
  desc: string;

  @ApiProperty({
    description: 'Descricao da carta em PT-BR',
    nullable: false,
    default:
      'Ofereça 1 monstro como Tributo; Invoque por Invocação-Especial 1 monstro de Nível 7 da sua mão que possa ser Invocado por Invocação-Normal/Baixado. Ele não pode atacar neste turno.',
  })
  @Column({
    type: 'character varying',
    nullable: false,
  })
  desc_pt: string;

  @ApiProperty({
    description: 'Poder de ataque da carta(Se for monstro)',
    nullable: true,
    default: 3000,
  })
  @Column({
    type: 'integer',
    nullable: true,
  })
  atk?: number;

  @ApiProperty({
    description: 'Defesa da carta(Se for monstro)',
    nullable: true,
    default: 2500,
  })
  @Column({
    type: 'integer',
    nullable: true,
  })
  def?: number;

  @ApiProperty({
    description: 'Level da carta',
    nullable: true,
    default: 8,
  })
  @Column({
    type: 'integer',
    nullable: true,
  })
  level?: number;

  @ApiProperty({
    description: 'Referencia da tabela `races` com a carta ( 8 = Dragon)',
    nullable: true,
    default: 8,
  })
  @Column({
    type: 'integer',
    nullable: true,
    select: false,
  })
  race?: number;

  @ApiProperty({
    description: 'Atributo da carta',
    nullable: true,
    default: 'LIGHT',
  })
  @Column({
    type: 'character varying',
    nullable: true,
  })
  attribute?: string;

  @ApiProperty({
    description: 'Archetype da carta',
    nullable: true,
    default: 'Blue-Eyes',
  })
  @Column({
    type: 'character varying',
    nullable: true,
  })
  archetype?: string;

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
