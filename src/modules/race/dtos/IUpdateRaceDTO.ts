import { ApiProperty } from '@nestjs/swagger';

export class IUpdateRaceDTO {
  @ApiProperty({
    description: 'Nome da raça',
    nullable: false,
    default: 'Beast',
  })
  name: string;
}
