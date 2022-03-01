import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ICreateTypeDTO } from '../../dtos/ICreateTypeDTO';
import { IUpdateTypeDTO } from '../../dtos/IUpdateTypeDTO';
import { CreateTypeUseCase } from '../../useCase/createType/CreateTypeUseCase';
import { FindTypeByIdUseCase } from '../../useCase/findById/FindTypeByIdUseCase';
import { FindTypesUseCase } from '../../useCase/findType/FindTypesUseCase';
import { UpdateTypeUseCase } from '../../useCase/updateType/UpdateTypeUseCase';
import { Type } from '../typeorm/entities/Type';

@Controller('types')
export class TypesController {
  constructor(
    private readonly findTypesUseCase: FindTypesUseCase,
    private readonly findByIdUseCase: FindTypeByIdUseCase,
    private readonly createTypeUseCase: CreateTypeUseCase,
    private readonly updateTypeUseCase: UpdateTypeUseCase,
  ) {}

  @Get()
  public async findAll(): Promise<Type[]> {
    return this.findTypesUseCase.execute();
  }

  @Get('/:id')
  public async findById(
    @Param('id') id: number,
  ): Promise<Type> {
    return this.findByIdUseCase.execute(id);
  }

  @Post()
  public async createType(
    @Body() data : ICreateTypeDTO
  ): Promise<Type> {
    return this.createTypeUseCase.execute(data);
  }

  @Put()
  public async updateType(
    @Body() data : IUpdateTypeDTO
  ): Promise<Type> {
    return this.updateTypeUseCase.execute(data);
  }
}
