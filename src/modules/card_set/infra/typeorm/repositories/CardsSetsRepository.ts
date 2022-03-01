import { Injectable } from '@nestjs/common';
import { ICreateCardDTO } from 'src/modules/card/dtos/ICreateCardDTO';
import { ICardsSetsRepository } from 'src/modules/card_set/repositories/ICardsSetsRepository';
import { EntityManager, MoreThan, Repository } from 'typeorm';
import { CardSets } from '../entities/CardSets';

@Injectable()
class CardsSetsRepository implements ICardsSetsRepository {
  private ormRepository: Repository<CardSets>;

  constructor(manager: EntityManager) {
    this.ormRepository = manager.getRepository(CardSets);
  }

  public async findAll() {
    return await this.ormRepository.find();
  }

}

export { CardsSetsRepository };
