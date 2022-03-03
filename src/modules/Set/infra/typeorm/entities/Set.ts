import { ApiProperty } from '@nestjs/swagger';
import { CardSets } from 'src/modules/card_set/infra/typeorm/entities/CardSets';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'sets',
})
class Sets {
  @ApiProperty({
    description: 'ID do pacote',
    nullable: false,
    default: Math.floor(Math.random() * 100),
  })
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ApiProperty({
    description: 'Nome do pacote',
    nullable: false,
    default: 'Gold Series',
  })
  @Column({
    type: 'character varying',
    nullable: false,
  })
  set_name: string;

  @ApiProperty({
    description: 'Cod. do pacote',
    nullable: false,
    default: 'GLD1',
  })
  @Column({
    type: 'character varying',
    nullable: false,
  })
  set_code: string;

  @ApiProperty({
    description: 'Numero de cartas no pacote',
    nullable: false,
    default: Math.floor(Math.random() * 500),
  })
  @Column({
    type: 'integer',
    nullable: false,
  })
  num_of_cards: number;

  @ApiProperty({
    description: 'Data de lancamento tcg',
    nullable: true,
    default: new Date().toISOString(),
  })
  @Column({
    type: 'timestamp',
    nullable: true,
  })
  tcg_date?: Date;

  //Relacionamentos

  @OneToMany(() => CardSets, (cardSets) => cardSets.set)
  cardSets: CardSets;
}

export { Sets };
