import { ApiProperty } from '@nestjs/swagger';

export class ICreateUserDTO {
  @ApiProperty({
    description: 'Nome do usuario',
    nullable: false,
    default: 'USER',
  })
  name: string;

  @ApiProperty({
    description: 'EMAIL do usuario',
    nullable: false,
    default: 'user@mail.com',
  })
  email: string;

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

  @ApiProperty({
    description: 'API para acessar as rotas da api',
    nullable: true,
    default: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
  })
  api_key?: string;

  @ApiProperty({
    description: 'Rede social',
    nullable: true,
    default: 'user_name_inst',
  })
  instagram_profile?: string;
}
