import { ApiProperty } from '@nestjs/swagger';

export class IAuthenticateUserDTO {
  @ApiProperty({
    description: 'username',
    nullable: false,
    default: 'user0name',
  })
  username: string;

  @ApiProperty({
    description: 'Senha do login',
    nullable: false,
    default: '123456',
  })
  password: string;
}
