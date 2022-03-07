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
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { JwtPrivateAuthGuard } from 'src/shared/middleware/auth/auth.private.guard';
import { JwtPublicAuthGuard } from 'src/shared/middleware/auth/auth.public.guard';
import { ICreateCardSetsDTO } from '../../dtos/ICreateCardSetsDTO';
import { IUpdateCardSetsDTO } from '../../dtos/IUpdateCardSetsDTO';
import { CreateCardSetUseCase } from '../../useCase/createCardSet/CreateCardSetUseCase';
import { FindBySetCodeUseCase } from '../../useCase/findBySetCode/FindBySetCodeUseCase';
import { FindBySetIdUseCase } from '../../useCase/findBySetId/FindBySetIdUseCase';
import { FindCardSetsUseCase } from '../../useCase/findCardSets/FindCardSetsUseCase';
import { UpdateCardSetUseCase } from '../../useCase/updateCardSet/UpdateCardSetUseCase';
import { CardSets } from '../typeorm/entities/CardSets';

@ApiTags('cardsets')
@Controller('cardsets')
@ApiSecurity('access-key')
export class CardsSetsController {
  constructor(
    private readonly findCardSetsUseCase: FindCardSetsUseCase,
    private readonly findBySetCodeUseCase: FindBySetCodeUseCase,
    private readonly findBySetIdUseCase: FindBySetIdUseCase,
    private readonly createCardSetUseCase: CreateCardSetUseCase,
    private readonly updateCardSetUseCase: UpdateCardSetUseCase,
  ) {}

  @UseGuards(JwtPublicAuthGuard)
  @ApiOkResponse({
    description: 'Todas os sets cards recuperadas com sucesso!',
    type: [CardSets],
  })
  @Get()
  public async findAll(): Promise<CardSets[]> {
    return this.findCardSetsUseCase.execute();
  }

  @UseGuards(JwtPublicAuthGuard)
  @ApiResponse({
    description: 'Carta recupera por ID',
    type: CardSets,
  })
  @ApiParam({
    name: 'code',
    description: 'Codigo do card set',
  })
  @Get('/:code')
  public async findByCode(@Param('code') code: string): Promise<CardSets> {
    return this.findBySetCodeUseCase.execute(code);
  }

  @UseGuards(JwtPublicAuthGuard)
  @ApiResponse({
    description: 'Carta recupera por ID',
    type: CardSets,
  })
  @ApiParam({
    name: 'id',
    description: 'ID do pacote',
  })
  @Get('/sets/:id')
  public async findBySetId(@Param('id') id: number): Promise<CardSets[]> {
    return this.findBySetIdUseCase.execute(id);
  }

  @UseGuards(JwtPrivateAuthGuard)
  @ApiBody({
    description: 'Informar os dados de cadastro',
    type: ICreateCardSetsDTO,
  })
  @ApiResponse({
    description: 'Cadastro realizado com sucesso',
    type: CardSets,
  })
  @ApiExcludeEndpoint(true)
  @Post()
  public async createCardSet(
    @Body() data: ICreateCardSetsDTO,
  ): Promise<CardSets> {
    return this.createCardSetUseCase.execute(data);
  }

  @UseGuards(JwtPrivateAuthGuard)
  @ApiParam({
    name: 'id',
    description: 'ID da carta',
  })
  @ApiBody({
    description: 'Informar os dados para atualizar a carta',
    type: IUpdateCardSetsDTO,
  })
  @ApiResponse({
    description: 'Carta atualizada com sucesso',
    type: CardSets,
  })
  @ApiExcludeEndpoint(true)
  @Put(':id')
  public async updateCardSet(
    @Param('id') id: number,
    @Body() data: IUpdateCardSetsDTO,
  ): Promise<CardSets> {
    return this.updateCardSetUseCase.execute(id, data);
  }
}
