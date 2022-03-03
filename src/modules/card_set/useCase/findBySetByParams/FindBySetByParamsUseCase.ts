import { Inject, Injectable } from '@nestjs/common';
import { CardSets } from '../../infra/typeorm/entities/CardSets';
import { ICardsSetsRepository } from '../../repositories/ICardsSetsRepository';

@Injectable()
export class FindBySetByParamsUseCase {
  constructor(
    @Inject('CardsSetsRepository')
    private cardsSetsRepository: ICardsSetsRepository,
  ) {}

  public async execute({ set_code, set_rarity }): Promise<CardSets[]> {
    return await this.cardsSetsRepository.findByParams({ set_code, set_rarity });
  }
}
