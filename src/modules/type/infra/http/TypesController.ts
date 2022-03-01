import { Controller, Get } from '@nestjs/common';
import { FindTypesUseCase } from '../../useCase/FindTypesUseCase';
import { Type } from '../typeorm/entities/Type';

@Controller('types')
export class TypesController {
  constructor(private readonly findTypesUseCase: FindTypesUseCase) {}

  @Get()
  public async findAll(): Promise<Type[]> {
    return this.findTypesUseCase.execute();
  }
}
