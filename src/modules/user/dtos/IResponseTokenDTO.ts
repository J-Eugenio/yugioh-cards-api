import { ApiProperty } from '@nestjs/swagger';
import { User } from '../infra/typeorm/entities/User';

class IResponseTokenDTO {
  @ApiProperty({
    description: 'Token do usuário',
    nullable: false,
    default: '[JWT_TOKEN]',
  })
  token: string;
  @ApiProperty({
    description: 'Usuário',
    nullable: false,
    default: {
      id: '36f323d3-6849-40f1-ae1b-ac3b33bc7c0e',
      name: 'John Joe',
      email: 'john.joe@example.com',
      reset_password: true,
      createdAt: '2021-07-09T17:27:44.037Z',
      updatedAt: '2021-07-09T17:27:44.037Z',
      version: 1,
    },
  })
  user: Partial<User>;
}

export { IResponseTokenDTO };
