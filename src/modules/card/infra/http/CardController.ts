import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  ApiBody,
  ApiExcludeEndpoint,
  ApiOkResponse,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ICreateCardDTO } from '../../dtos/ICreateCardDTO';
import { IUpdateCardDTO } from '../../dtos/IUpdateCardDTO';
import { CreateCardUseCase } from '../../useCases/createCard/CreateCardUseCase';
import { FindCardUseCase } from '../../useCases/findAll/FindCardUseCase';
import { FindCardByIdUseCase } from '../../useCases/findById/FindCardByIdUseCase';
import { UpdateCardUseCase } from '../../useCases/updateCard/UpdateCardUseCase';
import { Card } from '../typeorm/entities/Card';

@ApiTags('card')
@Controller('card')
export class CardController {
  constructor(
    private readonly findCardUseCase: FindCardUseCase,
    private readonly findCardByIdUseCase: FindCardByIdUseCase,
    private readonly createCardUseCase: CreateCardUseCase,
    private readonly updateCardUseCase: UpdateCardUseCase,
  ) {}

  @ApiOkResponse({
    description: 'Todas as cartas recuperadas com sucesso!',
    type: [Card],
  })
  @Get()
  public async findAll(): Promise<Card[]> {
    return this.findCardUseCase.execute();
  }

  @ApiResponse({
    description: 'Carta recupera por ID',
    type: Card,
  })
  @ApiParam({
    name: 'id',
    description: 'ID da carta',
  })
  @Get('/:id')
  public async findById(@Param('id') id: number): Promise<Card> {
    return this.findCardByIdUseCase.execute(id);
  }

  @ApiBody({
    description: 'Informar os dados de cadastro da carta',
    type: ICreateCardDTO,
  })
  @ApiResponse({
    description: 'Carta cadastrada com sucesso',
    type: Card,
  })
  @ApiExcludeEndpoint(true)
  @Post()
  public async createCard(@Body() data: ICreateCardDTO): Promise<Card> {
    return this.createCardUseCase.execute(data);
  }

  @ApiParam({
    name: 'id',
    description: 'ID da carta',
  })
  @ApiBody({
    description: 'Informar os dados para atualizar a carta',
    type: IUpdateCardDTO,
  })
  @ApiResponse({
    description: 'Carta atualizada com sucesso',
    type: Card,
  })
  @ApiExcludeEndpoint(true)
  @Put(':id')
  public async updateCard(
    @Param('id') id: number,
    @Body() data: IUpdateCardDTO,
  ): Promise<Card> {
    return this.updateCardUseCase.execute(id, data);
  }
}
