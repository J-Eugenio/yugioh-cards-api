import { Injectable } from '@nestjs/common';
import { ICardRepository } from 'src/modules/card/repositories/ICardRepository';
import { EntityManager, Repository } from 'typeorm';
import { Card } from '../entities/Card';

@Injectable()
class CardRepository implements ICardRepository {
  private ormRepository: Repository<Card>;

  constructor(manager: EntityManager) {
    this.ormRepository = manager.getRepository(Card);
  }

  public async findAll() {
    return await this.ormRepository.find({
      relations: ['images'],
    });
  }
}

export { CardRepository };
