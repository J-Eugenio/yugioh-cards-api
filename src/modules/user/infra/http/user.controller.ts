import { Body, Controller, Post } from '@nestjs/common';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { CreateUserUseCase } from '../../useCase/createUser/CreateUserUseCase';
import { User } from '../typeorm/entities/User';

@Controller('user')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async create(@Body() data: ICreateUserDTO): Promise<User> {
    return await this.createUserUseCase.execute(data);
  }
}
