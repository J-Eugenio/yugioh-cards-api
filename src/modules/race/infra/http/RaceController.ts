import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBody,
  ApiExcludeEndpoint,
  ApiOkResponse,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtPrivateAuthGuard } from 'src/shared/middleware/auth/auth.private.guard';
import { JwtPublicAuthGuard } from 'src/shared/middleware/auth/auth.public.guard';
import { ICreateRaceDTO } from '../../dtos/ICreateRaceDTO';
import { IUpdateRaceDTO } from '../../dtos/IUpdateRaceDTO';
import { CreateRaceUseCase } from '../../useCase/createRace/CreateRaceUseCase';
import { FindRaceByIdUseCase } from '../../useCase/findById/FindRaceByIdUseCase';
import { FindRacesUseCase } from '../../useCase/findRaces/FindRacesUseCase';
import { UpdateRaceUseCase } from '../../useCase/updateRace/UpdateRaceUseCase';
import { Race } from '../typeorm/entities/Race';

@ApiTags('races')
@Controller('races')
export class RaceController {
  constructor(
    private readonly findRacesUseCase: FindRacesUseCase,
    private readonly findByIdUseCase: FindRaceByIdUseCase,
    private readonly createRaceUseCase: CreateRaceUseCase,
    private readonly updateRaceUseCase: UpdateRaceUseCase,
  ) {}

  @UseGuards(JwtPublicAuthGuard)
  @ApiOkResponse({
    description: 'Todas os tipos recuperados com sucesso!',
    type: [Race],
  })
  @Get()
  public async findAll(): Promise<Race[]> {
    return this.findRacesUseCase.execute();
  }

  @UseGuards(JwtPublicAuthGuard)
  @ApiResponse({
    description: 'Raça recupero por ID',
    type: Race,
  })
  @ApiParam({
    name: 'id',
    description: 'Raça recuperado por ID',
  })
  @Get('/:id')
  public async findById(@Param('id') id: number): Promise<Race> {
    return this.findByIdUseCase.execute(id);
  }

  @UseGuards(JwtPrivateAuthGuard)
  @ApiBody({
    description: 'Informar os dados de cadastro',
    type: ICreateRaceDTO,
  })
  @ApiResponse({
    description: 'Cadastro realizado com sucesso',
    type: Race,
  })
  @ApiExcludeEndpoint(true)
  @Post()
  public async createRace(@Body() data: ICreateRaceDTO): Promise<Race> {
    return this.createRaceUseCase.execute(data);
  }

  @UseGuards(JwtPrivateAuthGuard)
  @ApiParam({
    name: 'id',
    description: 'ID da Raça',
  })
  @ApiBody({
    description: 'Informar os dados para atualizar o Raça',
    type: IUpdateRaceDTO,
  })
  @ApiResponse({
    description: 'Raça atualizado com sucesso',
    type: Race,
  })
  @ApiExcludeEndpoint(true)
  @Put(':id')
  public async updateRace(
    @Param('id') id: number,
    @Body() data: IUpdateRaceDTO,
  ): Promise<Race> {
    return this.updateRaceUseCase.execute(id, data);
  }
}
