import { Injectable } from '@nestjs/common';
import { ICreateCardDTO } from 'src/modules/card/dtos/ICreateCardDTO';
import { IUpdateCardDTO } from 'src/modules/card/dtos/IUpdateCardDTO';
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
      relations: ['images', 'race_r', 'type_r', 'card_sets'],
    });
  }

  public async findById(id: number) {
    return await this.ormRepository.findOne({
      where: {
        id,
      },
      relations: ['images', 'race_r', 'type_r', 'card_sets'],
    });
  }

  public async createCard(data: ICreateCardDTO): Promise<Card> {
    const card = this.ormRepository.create(data);

    await this.ormRepository.save(card);

    return card;
  }

  public async updateCard(id: number, data: IUpdateCardDTO): Promise<Card> {
    await this.ormRepository.update(id, data);
    const card = await this.ormRepository.findOne(id);
    return card;
  }
}

export { CardRepository };
