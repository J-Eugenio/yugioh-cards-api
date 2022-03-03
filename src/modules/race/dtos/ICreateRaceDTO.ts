import { ApiProperty } from '@nestjs/swagger';

export class ICreateRaceDTO {
  @ApiProperty({
    description: 'Nome da raça',
    nullable: false,
    default: 'Beast',
  })
  name: string;
}
