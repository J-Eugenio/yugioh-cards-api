import { Inject, Injectable } from '@nestjs/common';
import { Sets } from '../../infra/typeorm/entities/Set';
import { ISetsRepository } from '../../repositories/ISetsRepository';

@Injectable()
export class FindBySetNameUseCase {
  constructor(
    @Inject('SetsRepository')
    private setsRepository: ISetsRepository,
  ) {}

  public async execute(set_name: string): Promise<Sets[]> {
    return await this.setsRepository.findByName(set_name);
  }
}
