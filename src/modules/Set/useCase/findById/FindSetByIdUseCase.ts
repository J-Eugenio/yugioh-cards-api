import { Inject, Injectable } from '@nestjs/common';
import { Sets } from '../../infra/typeorm/entities/Set';
import { ISetsRepository } from '../../repositories/ISetsRepository';

@Injectable()
export class FindSetByIdUseCase {
  constructor(
    @Inject('SetsRepository')
    private setsRepository: ISetsRepository,
  ) {}

  public async execute(id: number): Promise<Sets> {
    return await this.setsRepository.findById(id);
  }
}
