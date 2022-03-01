import { Controller, Get } from '@nestjs/common';
import { FindSetsUseCase } from '../../useCase/findSets/FindSetsUseCase';
import { Set } from '../typeorm/entities/Set';

@Controller('set')
export class SetsController {
  constructor(private readonly findSetsUseCase: FindSetsUseCase) {}

  @Get()
  public async findAll(): Promise<Set[]> {
    return this.findSetsUseCase.execute();
  }
}
