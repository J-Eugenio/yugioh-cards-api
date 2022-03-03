import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  ApiBody,
  ApiExcludeEndpoint,
  ApiOkResponse,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ICreateSetsDTO } from '../../dtos/ICreateSetsDTO';
import { IUpdateSetsDTO } from '../../dtos/IUpdateSetsDTO';
import { CreateSetUseCase } from '../../useCase/createSet/CreateSetUseCase';
import { FindSetByIdUseCase } from '../../useCase/findBySetCode/FindSetByIdUseCase';
import { FindSetsUseCase } from '../../useCase/findSets/FindSetsUseCase';
import { UpdateSetUseCase } from '../../useCase/updateSet/UpdateSetUseCase';
import { Sets } from '../typeorm/entities/Set';

@ApiTags('set')
@Controller('set')
export class SetsController {
  constructor(
    private readonly findSetsUseCase: FindSetsUseCase,
    private readonly findSetByIdUseCase: FindSetByIdUseCase,
    private readonly createSetUseCase: CreateSetUseCase,
    private readonly updateSetUseCase: UpdateSetUseCase,
  ) {}

  @ApiOkResponse({
    description: 'Todas os sets recuperados com sucesso!',
    type: [Sets],
  })
  @Get()
  public async findAll(): Promise<Sets[]> {
    return this.findSetsUseCase.execute();
  }

  @ApiResponse({
    description: 'Set recupero por ID',
    type: Sets,
  })
  @ApiParam({
    name: 'id',
    description: 'Set recuperado por ID',
  })
  @Get('/:id')
  public async findById(@Param('id') id: number): Promise<Sets> {
    return this.findSetByIdUseCase.execute(id);
  }

  @ApiBody({
    description: 'Informar os dados de cadastro',
    type: ICreateSetsDTO,
  })
  @ApiResponse({
    description: 'Cadastro realizado com sucesso',
    type: Sets,
  })
  @ApiExcludeEndpoint(true)
  @Post()
  public async createSet(@Body() data: ICreateSetsDTO): Promise<Sets> {
    return this.createSetUseCase.execute(data);
  }

  @ApiParam({
    name: 'id',
    description: 'ID da carta',
  })
  @ApiBody({
    description: 'Informar os dados para atualizar a carta',
    type: IUpdateSetsDTO,
  })
  @ApiResponse({
    description: 'Carta atualizada com sucesso',
    type: Sets,
  })
  @ApiExcludeEndpoint(true)
  @Put(':id')
  public async updateSet(
    id: number,
    @Body() data: IUpdateSetsDTO,
  ): Promise<Sets> {
    return this.updateSetUseCase.execute(id, data);
  }
}
