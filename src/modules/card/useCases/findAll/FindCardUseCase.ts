import { Inject, Injectable } from '@nestjs/common';
import { ICardRepository } from '../../repositories/ICardRepository';

@Injectable()
export class FindCardUseCase {
  constructor(
    @Inject('CardRepository')
    private cardRepository: ICardRepository,
  ) {}

  public async execute() {
    return await this.cardRepository.findAll();
  }
}
