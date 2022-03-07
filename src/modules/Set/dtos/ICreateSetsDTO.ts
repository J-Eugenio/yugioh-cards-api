import { ApiProperty } from '@nestjs/swagger';

export class ICreateSetsDTO {
  @ApiProperty({
    description: 'Nome do pacote',
    nullable: false,
    default: 'Gold Series',
  })
  set_name: string;

  @ApiProperty({
    description: 'Cod. do pacote',
    nullable: false,
    default: 'GLD1',
  })
  set_code: string;

  @ApiProperty({
    description: 'Numero de cartas no pacote',
    nullable: false,
    default: Math.floor(Math.random() * 500),
  })
  num_of_cards: number;

  @ApiProperty({
    description: 'Data de lancamento tcg',
    nullable: true,
    default: new Date().toISOString(),
  })
  tcg_date?: Date;
}
