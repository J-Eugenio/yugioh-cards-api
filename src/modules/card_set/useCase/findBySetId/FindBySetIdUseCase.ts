import { Inject, Injectable } from '@nestjs/common';
import { CardSets } from '../../infra/typeorm/entities/CardSets';
import { ICardsSetsRepository } from '../../repositories/ICardsSetsRepository';

@Injectable()
export class FindBySetIdUseCase {
  constructor(
    @Inject('CardsSetsRepository')
    private cardsSetsRepository: ICardsSetsRepository,
  ) {}

  public async execute(id: number): Promise<CardSets[]> {
    return await this.cardsSetsRepository.findBySetId(id);
  }
}
