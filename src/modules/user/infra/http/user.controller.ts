import {
  Body,
  Controller,
  Post,
  UnauthorizedException,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiExcludeEndpoint,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { LocationRateLimitInterceptor } from 'src/shared/Utils/RateLimit/RateLimit';
import { IAuthenticateUserDTO } from '../../dtos/IAuthenticateUserDTO';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IResponseTokenDTO } from '../../dtos/IResponseTokenDTO';
import { AuthenticateUserUseCase } from '../../useCase/authenticateUser/authenticateUserUseCase';
import { CreateUserUseCase } from '../../useCase/createUser/CreateUserUseCase';
import { User } from '../typeorm/entities/User';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly authenticateUseCase: AuthenticateUserUseCase,
  ) {}

  @ApiBody({
    description: 'Informar os dados de cadastro do usuario',
    type: ICreateUserDTO,
  })
  @ApiResponse({
    description: 'Usuario cadastrado com sucesso',
    type: User,
  })
  @ApiExcludeEndpoint(true)
  @UseInterceptors(new LocationRateLimitInterceptor())
  @Post()
  async create(@Body() data: ICreateUserDTO): Promise<User> {
    return await this.createUserUseCase.execute(data);
  }

  @ApiBody({
    description: 'Informar os dados de login',
    type: IAuthenticateUserDTO,
  })
  @ApiResponse({
    description: 'Logado com sucesso',
    type: IResponseTokenDTO,
  })
  @ApiBadRequestResponse({
    description: 'Combinação Usuario/senha incorreta!',
    type: UnauthorizedException,
  })
  @ApiExcludeEndpoint(true)
  @Post('/auth')
  async auth(@Body() data: IAuthenticateUserDTO): Promise<IResponseTokenDTO> {
    return await this.authenticateUseCase.execute(data);
  }
}
