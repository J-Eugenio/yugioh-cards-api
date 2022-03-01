import { Inject, Injectable } from '@nestjs/common';
import { ITypesRepository } from '../repositories/ITypesRepository';

@Injectable()
export class FindTypesUseCase {
  constructor(
    @Inject('TypesRepository')
    private typesRepository: ITypesRepository,
  ) {}

  public async execute() {
    return await this.typesRepository.findAll();
  }
}
