import { Inject } from '@nestjs/common';
import { ICreateSetsDTO } from '../../dtos/ICreateSetsDTO';
import { Sets } from '../../infra/typeorm/entities/Set';
import { ISetsRepository } from '../../repositories/ISetsRepository';

class CreateSetUseCase {
  constructor(
    @Inject('SetsRepository')
    private setsRepository: ISetsRepository,
  ) {}

  public async execute(data: ICreateSetsDTO): Promise<Sets> {
    const set = await this.setsRepository.createSet(data);

    return set;
  }
}

export { CreateSetUseCase };
