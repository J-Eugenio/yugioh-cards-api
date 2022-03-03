import { Inject, Injectable } from '@nestjs/common';
import { IFilterCardsParamsDTO } from '../../dtos/IFilterCardsParamsDTO';
import { Card } from '../../infra/typeorm/entities/Card';
import { ICardRepository } from '../../repositories/ICardRepository';

@Injectable()
export class FindCardByParamsUseCase {
  constructor(
    @Inject('CardRepository')
    private cardRepository: ICardRepository,
  ) {}

  public async execute({name, name_pt, atk, def, level, attribute}): Promise<Card[]> {
    return await this.cardRepository.findByParams({name, name_pt, atk, def, level, attribute});
  }
}
