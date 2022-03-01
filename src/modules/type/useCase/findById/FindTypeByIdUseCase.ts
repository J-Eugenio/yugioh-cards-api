import { Inject, Injectable } from '@nestjs/common';
import { Type } from '../../infra/typeorm/entities/Type';
import { ITypesRepository } from '../../repositories/ITypesRepository';

@Injectable()
export class FindTypeByIdUseCase {
  constructor(
    @Inject('TypesRepository')
    private typesRepository: ITypesRepository,
  ) {}

  public async execute(id: number): Promise<Type> {
    return await this.typesRepository.findById(id);
  }
}
