import { Controller, Get } from '@nestjs/common';
import { FindRacesUseCase } from '../../useCase/findRaces/FindRacesUseCase';
import { Race } from '../typeorm/entities/Race';

@Controller('races')
export class RaceController {
  constructor(private readonly findRacesUseCase: FindRacesUseCase) {}

  @Get()
  public async findAll(): Promise<Race[]> {
    return this.findRacesUseCase.execute();
  }
}
