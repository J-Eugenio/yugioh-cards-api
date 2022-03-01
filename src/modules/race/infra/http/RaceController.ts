import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ICreateRaceDTO } from '../../dtos/ICreateRaceDTO';
import { IUpdateRaceDTO } from '../../dtos/IUpdateRaceDTO';
import { CreateRaceUseCase } from '../../useCase/createRace/CreateRaceUseCase';
import { FindRaceByIdUseCase } from '../../useCase/findById/FindRaceByIdUseCase';
import { FindRacesUseCase } from '../../useCase/findRaces/FindRacesUseCase';
import { UpdateRaceUseCase } from '../../useCase/updateRace/UpdateRaceUseCase';
import { Race } from '../typeorm/entities/Race';

@Controller('races')
export class RaceController {
  constructor(
      private readonly findRacesUseCase: FindRacesUseCase,
      private readonly findByIdUseCase: FindRaceByIdUseCase,
      private readonly createRaceUseCase: CreateRaceUseCase,
      private readonly updateRaceUseCase: UpdateRaceUseCase,
    ) {}

  @Get()
  public async findAll(): Promise<Race[]> {
    return this.findRacesUseCase.execute();
  }

  @Get('/:id')
  public async findById(
    @Param('id') id: number,
  ): Promise<Race> {
    return this.findByIdUseCase.execute(id);
  }

  @Post()
  public async createRace(
    @Body() data : ICreateRaceDTO
  ): Promise<Race> {
    return this.createRaceUseCase.execute(data);
  }

  @Put()
  public async updateRace(
    @Body() data : IUpdateRaceDTO
  ): Promise<Race> {
    return this.updateRaceUseCase.execute(data);
  }
}
