import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ICreateCardDTO } from '../../dtos/ICreateCardDTO';
import { IUpdateCardDTO } from '../../dtos/IUpdateCardDTO';
import { CreateCardUseCase } from '../../useCases/createCard/CreateCardUseCase';
import { FindCardUseCase } from '../../useCases/findAll/FindCardUseCase';
import { FindCardByIdUseCase } from '../../useCases/findById/FindCardByIdUseCase';
import { UpdateCardUseCase } from '../../useCases/updateCard/UpdateCardUseCase';
import { Card } from '../typeorm/entities/Card';

@Controller('card')
export class CardController {
  constructor(
      private readonly findCardUseCase: FindCardUseCase,
      private readonly findCardByIdUseCase: FindCardByIdUseCase,
      private readonly createCardUseCase: CreateCardUseCase,
      private readonly updateCardUseCase: UpdateCardUseCase
    ) {}

  @Get()
  public async findAll(): Promise<Card[]> {
    return this.findCardUseCase.execute();
  }

  @Get('/:id')
  public async findById(
    @Param('id') id: number,
  ): Promise<Card> {
    return this.findCardByIdUseCase.execute(id);
  }

  @Post()
  public async createCard(
    @Body() data : ICreateCardDTO
  ): Promise<Card> {
    return this.createCardUseCase.execute(data);
  }

  @Put()
  public async updateCard(
    @Body() data : IUpdateCardDTO
  ): Promise<Card> {
    return this.updateCardUseCase.execute(data);
  }
}
