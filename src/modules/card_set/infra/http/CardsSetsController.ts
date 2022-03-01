import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ICreateCardSetsDTO } from '../../dtos/ICreateCardSetsDTO';
import { IUpdateCardSetsDTO } from '../../dtos/IUpdateCardSetsDTO';
import { CreateCardSetUseCase } from '../../useCase/createCardSet/CreateCardSetUseCase';
import { FindBySetCodeUseCase } from '../../useCase/findBySetCode/FindBySetCodeUseCase';
import { FindCardSetsUseCase } from '../../useCase/findCardSets/FindCardSetsUseCase';
import { UpdateCardSetUseCase } from '../../useCase/updateCardSet/UpdateCardSetUseCase';
import { CardSets } from '../typeorm/entities/CardSets';

@Controller('cardsets')
export class CardsSetsController {
  constructor(
    private readonly findCardSetsUseCase: FindCardSetsUseCase,
    private readonly findBySetCodeUseCase: FindBySetCodeUseCase,
    private readonly createCardSetUseCase: CreateCardSetUseCase,
    private readonly updateCardSetUseCase: UpdateCardSetUseCase
    ) {}

  @Get()
  public async findAll(): Promise<CardSets[]> {
    return this.findCardSetsUseCase.execute();
  }

  @Get('/:code')
  public async findByCode(
    @Param('code') code: string,
  ): Promise<CardSets> {
    return this.findBySetCodeUseCase.execute(code);
  }

  @Post()
  public async createCardSet(
    @Body() data : ICreateCardSetsDTO
  ): Promise<CardSets> {
    return this.createCardSetUseCase.execute(data);
  }

  @Put()
  public async updateCardSet(
    @Body() data : IUpdateCardSetsDTO
  ): Promise<CardSets> {
    return this.updateCardSetUseCase.execute(data);
  }
}
