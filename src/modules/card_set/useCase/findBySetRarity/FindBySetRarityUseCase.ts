import { Inject, Injectable } from '@nestjs/common';
import { CardSets } from '../../infra/typeorm/entities/CardSets';
import { ICardsSetsRepository } from '../../repositories/ICardsSetsRepository';

@Injectable()
export class FindBySetRarityUseCase {
  constructor(
    @Inject('CardsSetsRepository')
    private cardsSetsRepository: ICardsSetsRepository,
  ) {}

  public async execute(rarity: string): Promise<CardSets[]> {
    return await this.cardsSetsRepository.findByRarity(rarity);
  }
}
