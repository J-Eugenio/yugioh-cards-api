import { Inject, Injectable } from '@nestjs/common';
import { ICardsSetsRepository } from '../../repositories/ICardsSetsRepository';

@Injectable()
export class FindCardSetsUseCase {
  constructor(
    @Inject('CardsSetsRepository')
    private cardsSetsRepository: ICardsSetsRepository,
  ) {}

  public async execute() {
    return await this.cardsSetsRepository.findAll();
  }
}
