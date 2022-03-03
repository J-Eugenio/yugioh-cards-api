import { BadRequestException, Inject, NotFoundException } from '@nestjs/common';
import { IUpdateTypeDTO } from '../../dtos/IUpdateTypeDTO';
import { Type } from '../../infra/typeorm/entities/Type';
import { ITypesRepository } from '../../repositories/ITypesRepository';

class UpdateTypeUseCase {
  constructor(
    @Inject('TypesRepository')
    private typesRepository: ITypesRepository,
  ) {}

  public async execute(id: number, data: IUpdateTypeDTO): Promise<Type> {
    // Verificação para existência de um produto
    const check_exists_type = await this.typesRepository.findById(id);

    if (!check_exists_type) {
      throw new BadRequestException('Esse Type não está cadastrado!');
    }

    const type = await this.typesRepository.updateType(id, data);

    return type;
  }
}

export { UpdateTypeUseCase };
