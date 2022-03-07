import { ApiProperty } from '@nestjs/swagger';

export class ICreateCardSetsDTO {
  @ApiProperty({
    description: 'ID da carta',
    nullable: false,
    default: Math.floor(Math.random() * 100),
  })
  card_id: number;

  @ApiProperty({
    description: 'ID do pacote',
    nullable: false,
    default: Math.floor(Math.random() * 100),
  })
  set_id: number;

  @ApiProperty({
    description: 'Cod. da carta dentro do pacote',
    nullable: false,
    default: 'CT13-EN008',
  })
  set_code: string;

  @ApiProperty({
    description: 'Raridade do pacote',
    nullable: false,
    default: 'Ultra Rare',
  })
  set_rarity: string;

  @ApiProperty({
    description: 'Raridade do pacote',
    nullable: false,
    default: '(UR)',
  })
  set_rarity_code: string;
}
