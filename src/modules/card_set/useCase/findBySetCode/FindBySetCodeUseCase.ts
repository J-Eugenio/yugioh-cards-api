import { Inject, Injectable } from '@nestjs/common';
import { CardSets } from '../../infra/typeorm/entities/CardSets';
import { ICardsSetsRepository } from '../../repositories/ICardsSetsRepository';

@Injectable()
export class FindBySetCodeUseCase {
  constructor(
    @Inject('CardsSetsRepository')
    private cardsSetsRepository: ICardsSetsRepository,
  ) {}

  public async execute(code: string): Promise<CardSets> {
    return await this.cardsSetsRepository.findByCode(code);
  }
}
