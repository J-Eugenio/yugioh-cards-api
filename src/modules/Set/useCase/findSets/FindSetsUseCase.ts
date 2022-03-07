import { Inject, Injectable } from '@nestjs/common';
import { ISetsRepository } from '../../repositories/ISetsRepository';

@Injectable()
export class FindSetsUseCase {
  constructor(
    @Inject('SetsRepository')
    private setsRepository: ISetsRepository,
  ) {}

  public async execute() {
    return await this.setsRepository.findAll();
  }
}
