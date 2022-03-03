import { ApiProperty } from '@nestjs/swagger';

export class ICreateTypeDTO {
  @ApiProperty({
    description: 'Nome do tipo',
    nullable: false,
    default: 'Toon Monster',
  })
  name: string;

  @ApiProperty({
    description: '1 - Main Deck Type, 2 - Extra Deck Type',
    nullable: false,
    default: 1,
  })
  type: number;
}
