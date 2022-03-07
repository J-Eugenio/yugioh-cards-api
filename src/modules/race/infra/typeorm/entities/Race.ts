import { ApiProperty } from '@nestjs/swagger';
import { Card } from 'src/modules/card/infra/typeorm/entities/Card';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'races',
})
export class Race {
  @ApiProperty({
    description: 'ID da raça',
    nullable: false,
    default: Math.floor(Math.random() * 1000),
  })
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ApiProperty({
    description: 'Nome da raça',
    nullable: false,
    default: 'Beast',
  })
  @Column({
    type: 'character varying',
    nullable: false,
  })
  name: string;

  card: Card;
}
