import { Inject, Injectable } from '@nestjs/common';
import { Card } from '../../infra/typeorm/entities/Card';
import { ICardRepository } from '../../repositories/ICardRepository';

@Injectable()
export class FindCardByIdUseCase {
  constructor(
    @Inject('CardRepository')
    private cardRepository: ICardRepository,
  ) {}

  public async execute(id: number): Promise<Card> {
    return await this.cardRepository.findById(id);
  }
}
