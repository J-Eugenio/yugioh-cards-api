import { Inject } from '@nestjs/common';
import { Card } from '../../infra/typeorm/entities/Card';
import { CardRepository } from '../../infra/typeorm/repositories/CardRepository';

export class FindCardByDefUseCase {
  constructor(
    @Inject('CardRepository')
    private readonly cardRepository: CardRepository,
  ) {}

  public async execute(def: number): Promise<Card[]> {
    return await this.cardRepository.findByDef(def);
  }
}
