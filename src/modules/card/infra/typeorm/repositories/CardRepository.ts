import { Injectable } from '@nestjs/common';
import { ICreateCardDTO } from 'src/modules/card/dtos/ICreateCardDTO';
import { IUpdateCardDTO } from 'src/modules/card/dtos/IUpdateCardDTO';
import { ICardRepository } from 'src/modules/card/repositories/ICardRepository';
import { EntityManager, ILike, Repository } from 'typeorm';
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

  public async findByName(name: string): Promise<Card[]> {
    return await this.ormRepository.find({
      where: {
        name: ILike(`%${name}%`),
      },
      relations: ['images', 'race_r', 'type_r', 'card_sets'],
    });
  }

  public async findByNamePT(name_pt: string): Promise<Card[]> {
    return await this.ormRepository.find({
      where: {
        name_pt: ILike(`%${name_pt}%`),
      },
      relations: ['images', 'race_r', 'type_r', 'card_sets'],
    });
  }

  public async findByAtk(atk: number): Promise<Card[]> {
    return await this.ormRepository.find({
      where: {
        atk: atk,
      },
      relations: ['images', 'race_r', 'type_r', 'card_sets'],
    });
  }

  public async findByDef(def: number): Promise<Card[]> {
    return await this.ormRepository.find({
      where: {
        def: def,
      },
      relations: ['images', 'race_r', 'type_r', 'card_sets'],
    });
  }

  public async findByLevel(level: number): Promise<Card[]> {
    return await this.ormRepository.find({
      where: {
        level: level,
      },
      relations: ['images', 'race_r', 'type_r', 'card_sets'],
    });
  }

  public async findByAttribute(attribute: string): Promise<Card[]> {
    return await this.ormRepository.find({
      where: {
        attribute: attribute,
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
