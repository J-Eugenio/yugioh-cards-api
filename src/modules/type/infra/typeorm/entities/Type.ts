import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'types',
  schema: 'public',
})
class Type {
  @ApiProperty({
    description: 'ID do tipo',
    nullable: false,
    default: Math.floor(Math.random() * 500),
  })
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ApiProperty({
    description: 'Nome do tipo',
    nullable: false,
    default: 'Toon Monster',
  })
  @Column({
    type: 'character varying',
    nullable: false,
  })
  name: string;

  @ApiProperty({
    description: '1 - Main Deck Type, 2 - Extra Deck Type',
    nullable: false,
    default: 1,
  })
  @Column({
    type: 'integer',
    nullable: false,
  })
  type: number;
}

export { Type };
