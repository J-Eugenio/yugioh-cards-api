import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBody,
  ApiExcludeEndpoint,
  ApiOkResponse,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { LocationRateLimitInterceptor } from 'src/shared/Utils/RateLimit';
import { ICreateTypeDTO } from '../../dtos/ICreateTypeDTO';
import { IUpdateTypeDTO } from '../../dtos/IUpdateTypeDTO';
import { CreateTypeUseCase } from '../../useCase/createType/CreateTypeUseCase';
import { FindTypeByIdUseCase } from '../../useCase/findById/FindTypeByIdUseCase';
import { FindTypesUseCase } from '../../useCase/findType/FindTypesUseCase';
import { UpdateTypeUseCase } from '../../useCase/updateType/UpdateTypeUseCase';
import { Type } from '../typeorm/entities/Type';

@ApiTags('types')
@UseInterceptors(new LocationRateLimitInterceptor())
@Controller('types')
export class TypesController {
  constructor(
    private readonly findTypesUseCase: FindTypesUseCase,
    private readonly findByIdUseCase: FindTypeByIdUseCase,
    private readonly createTypeUseCase: CreateTypeUseCase,
    private readonly updateTypeUseCase: UpdateTypeUseCase,
  ) {}

  @ApiOkResponse({
    description: 'Todas os tipos recuperados com sucesso!',
    type: [Type],
  })
  @Get()
  public async findAll(): Promise<Type[]> {
    return this.findTypesUseCase.execute();
  }

  @ApiResponse({
    description: 'Tipo recupero por ID',
    type: Set,
  })
  @ApiParam({
    name: 'id',
    description: 'Tipo recuperado por ID',
  })
  @Get('/:id')
  public async findById(@Param('id') id: number): Promise<Type> {
    return this.findByIdUseCase.execute(id);
  }

  @ApiBody({
    description: 'Informar os dados de cadastro',
    type: ICreateTypeDTO,
  })
  @ApiResponse({
    description: 'Cadastro realizado com sucesso',
    type: Type,
  })
  @ApiExcludeEndpoint(true)
  @Post()
  public async createType(@Body() data: ICreateTypeDTO): Promise<Type> {
    return this.createTypeUseCase.execute(data);
  }

  @ApiParam({
    name: 'id',
    description: 'ID do tipo',
  })
  @ApiBody({
    description: 'Informar os dados para atualizar o tipo',
    type: IUpdateTypeDTO,
  })
  @ApiResponse({
    description: 'Tipo atualizado com sucesso',
    type: Type,
  })
  @ApiExcludeEndpoint(true)
  @Put(':id')
  public async updateType(
    @Param('id') id: number,
    @Body() data: IUpdateTypeDTO,
  ): Promise<Type> {
    return this.updateTypeUseCase.execute(id, data);
  }
}
