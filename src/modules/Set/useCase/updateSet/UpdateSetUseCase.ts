import { BadRequestException, Inject, NotFoundException } from '@nestjs/common';
import { IUpdateSetsDTO } from '../../dtos/IUpdateSetsDTO';
import { Set } from '../../infra/typeorm/entities/Set';
import { ISetsRepository } from '../../repositories/ISetsRepository';

class UpdateSetUseCase {
  constructor(
    @Inject('SetsRepository')
    private setsRepository: ISetsRepository,
  ) {}

  public async execute(id: number, data: IUpdateSetsDTO): Promise<Set> {
    // Verificação para existência de um produto
    const check_exists_set = await this.setsRepository.findById(id);

    if (!check_exists_set) {
      throw new BadRequestException('Esse Set não está cadastrado!');
    }

    const set = await this.setsRepository.updateSet(id, data);

    return set;
  }
}

export { UpdateSetUseCase };
