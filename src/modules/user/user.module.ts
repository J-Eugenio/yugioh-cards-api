import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './infra/typeorm/entities/User';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../shared/middleware/auth/constants';
import { BCryptHashProvider } from 'src/shared/Utils/hash/implementations/BCryptHashProvider';
import { UserRepository } from './infra/typeorm/repositories/UserRepository';
import { UserController } from './infra/http/user.controller';
import { CreateUserUseCase } from './useCase/createUser/CreateUserUseCase';
import { NestJWTTokenProvider } from 'src/shared/middleware/auth/TokenProvider/implementations/NestJWTTokenProvider';
import { AuthenticateUserUseCase } from './useCase/authenticateUser/authenticateUserUseCase';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    }),
  ],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    AuthenticateUserUseCase,
    {
      provide: 'HashProvider',
      inject: [BCryptHashProvider],
      useClass: BCryptHashProvider,
    },
    {
      provide: 'UserRepository',
      inject: [UserRepository],
      useClass: UserRepository,
    },
    {
      provide: 'TokenProvider',
      inject: [NestJWTTokenProvider],
      useClass: NestJWTTokenProvider,
    },
  ],
})
export class UserModule {}
