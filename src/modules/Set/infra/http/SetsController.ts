import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ICreateSetsDTO } from '../../dtos/ICreateSetsDTO';
import { IUpdateSetsDTO } from '../../dtos/IUpdateSetsDTO';
import { CreateSetUseCase } from '../../useCase/createSet/CreateSetUseCase';
import { FindSetByIdUseCase } from '../../useCase/findBySetCode/FindSetByIdUseCase';
import { FindSetsUseCase } from '../../useCase/findSets/FindSetsUseCase';
import { UpdateSetUseCase } from '../../useCase/updateSet/UpdateSetUseCase';
import { Set } from '../typeorm/entities/Set';

@Controller('set')
export class SetsController {
  constructor(
    private readonly findSetsUseCase: FindSetsUseCase,
    private readonly findSetByIdUseCase: FindSetByIdUseCase,
    private readonly createSetUseCase: CreateSetUseCase,
    private readonly updateSetUseCase: UpdateSetUseCase,
  ) {}

  @Get()
  public async findAll(): Promise<Set[]> {
    return this.findSetsUseCase.execute();
  }

  @Get('/:id')
  public async findById(@Param('id') id: number): Promise<Set> {
    return this.findSetByIdUseCase.execute(id);
  }

  @Post()
  public async createSet(@Body() data: ICreateSetsDTO): Promise<Set> {
    return this.createSetUseCase.execute(data);
  }

  @Put()
  public async updateSet(@Body() data: IUpdateSetsDTO): Promise<Set> {
    return this.updateSetUseCase.execute(data);
  }
}
