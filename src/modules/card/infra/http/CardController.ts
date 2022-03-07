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
import { ICreateCardDTO } from '../../dtos/ICreateCardDTO';
import { IUpdateCardDTO } from '../../dtos/IUpdateCardDTO';
import { CreateCardUseCase } from '../../useCases/createCard/CreateCardUseCase';
import { FindCardUseCase } from '../../useCases/findAll/FindCardUseCase';
import { FindCardByAtkUseCase } from '../../useCases/findByAtk/FindCardByAtkUseCase';
import { FindCardByAttributeUseCase } from '../../useCases/findByAttribute/FindCardByAttributeUseCase';
import { FindCardByDefUseCase } from '../../useCases/findByDef/FindCardByDefUseCase';
import { FindCardByIdUseCase } from '../../useCases/findById/FindCardByIdUseCase';
import { FindCardByLevelUseCase } from '../../useCases/findByLevel/FindCardByLevelUseCase';
import { FindCardByNameUseCase } from '../../useCases/findByName/FindCardByNameUseCase';
import { FindCardByNamePTUseCase } from '../../useCases/findByNamePt/FindCardByNamePTUseCase';
import { UpdateCardUseCase } from '../../useCases/updateCard/UpdateCardUseCase';
import { Card } from '../typeorm/entities/Card';

@ApiTags('card')
@Controller('card')
@ApiSecurity('access-key')
export class CardController {
  constructor(
    private readonly findCardUseCase: FindCardUseCase,
    private readonly findCardByIdUseCase: FindCardByIdUseCase,
    private readonly createCardUseCase: CreateCardUseCase,
    private readonly updateCardUseCase: UpdateCardUseCase,
    private readonly findCardByNameUseCase: FindCardByNameUseCase,
    private readonly findCardByNamePTUseCase: FindCardByNamePTUseCase,
    private readonly findCardByLevelUseCase: FindCardByLevelUseCase,
    private readonly findCardByDefUseCase: FindCardByDefUseCase,
    private readonly findCardByAttributeUseCase: FindCardByAttributeUseCase,
    private readonly findCardByAtkUseCase: FindCardByAtkUseCase,
  ) {}

  @UseGuards(JwtPublicAuthGuard)
  @ApiOkResponse({
    description: 'Todas as cartas recuperadas com sucesso!',
    type: [Card],
  })
  @Get()
  public async findAll(): Promise<Card[]> {
    return this.findCardUseCase.execute();
  }

  @UseGuards(JwtPublicAuthGuard)
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

  @UseGuards(JwtPublicAuthGuard)
  @ApiResponse({
    description: 'Carta recupera por nome',
    type: Card,
  })
  @ApiParam({
    name: 'name',
    description: 'nome da carta',
  })
  @Get('/name/:name')
  public async findByName(@Param('name') name: string): Promise<Card[]> {
    return this.findCardByNameUseCase.execute(name);
  }

  @UseGuards(JwtPublicAuthGuard)
  @ApiResponse({
    description: 'Carta recupera por nome_pt',
    type: Card,
  })
  @ApiParam({
    name: 'name_pt',
    description: 'nome_pt da carta',
  })
  @Get('/name_pt/:name_pt')
  public async findByNamePT(
    @Param('name_pt') name_pt: string,
  ): Promise<Card[]> {
    return this.findCardByNamePTUseCase.execute(name_pt);
  }

  @UseGuards(JwtPublicAuthGuard)
  @ApiResponse({
    description: 'Carta recupera por atk',
    type: Card,
  })
  @ApiParam({
    name: 'atk',
    description: 'atk da carta',
  })
  @Get('/atk/:atk')
  public async findByAtk(@Param('atk') atk: number): Promise<Card[]> {
    return this.findCardByAtkUseCase.execute(atk);
  }

  @UseGuards(JwtPublicAuthGuard)
  @ApiResponse({
    description: 'Carta recupera por def',
    type: Card,
  })
  @ApiParam({
    name: 'def',
    description: 'def da carta',
  })
  @Get('/def/:def')
  public async findByDef(@Param('def') def: number): Promise<Card[]> {
    return this.findCardByDefUseCase.execute(def);
  }

  @UseGuards(JwtPublicAuthGuard)
  @ApiResponse({
    description: 'Carta recupera por level',
    type: Card,
  })
  @ApiParam({
    name: 'level',
    description: 'level da carta',
  })
  @Get('/level/:level')
  public async findByLevel(@Param('level') level: number): Promise<Card[]> {
    return this.findCardByLevelUseCase.execute(level);
  }

  @UseGuards(JwtPublicAuthGuard)
  @ApiResponse({
    description: 'Carta recupera por atributo',
    type: Card,
  })
  @ApiParam({
    name: 'attribute',
    description: 'attribute da carta',
  })
  @Get('/attribute/:attribute')
  public async findByAttribute(
    @Param('attribute') attribute: string,
  ): Promise<Card[]> {
    return this.findCardByAttributeUseCase.execute(attribute);
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

  @UseGuards(JwtPrivateAuthGuard)
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
