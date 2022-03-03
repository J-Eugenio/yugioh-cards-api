import { Injectable } from '@nestjs/common';
import { ICreateCardDTO } from 'src/modules/card/dtos/ICreateCardDTO';
import { IFilterCardsParamsDTO } from 'src/modules/card/dtos/IFilterCardsParamsDTO';
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

  public async findByParams({name, name_pt, atk, def, level, attribute}): Promise<Card[]> {
    return await this.ormRepository.query(`
      SELECT * 
        FROM cards cards
          LEFT JOIN card_sets st ON st.card_id = cards.id
          LEFT JOIN images img ON img.card_id = cards.id
        WHERE
        CASE 
        WHEN %$1% IS NOT NULL 
          THEN cards.name ILIKE %$1%
          ELSE true
        END
        AND
        CASE 
          WHEN %$2% IS NOT NULL 
            THEN cards.name_pt ILIKE %$2%
            ELSE true
        END
        AND
        CASE 
          WHEN $3 IS NOT NULL 
            THEN cards.atk = $3
            ELSE true
        END
        AND
        CASE 
          WHEN $4 IS NOT NULL 
            THEN cards.def = $4
            ELSE true
        END
        AND
        CASE 
          WHEN $5 IS NOT NULL 
            THEN cards.level = $5
            ELSE true
        END
        AND
        CASE 
          WHEN $6 IS NOT NULL 
            THEN cards.attribute = $6
            ELSE true
        END

    `, [name, name_pt, atk, def, level, attribute])
  }

  public async createCard(data: ICreateCardDTO): Promise<Card> {
    const card = this.ormRepository.create(data);

    await this.ormRepository.save(card);

    return card;
  }

  public async updateCard(data: IUpdateCardDTO): Promise<Card> {
    const card = this.ormRepository.create(data);

    await this.ormRepository.save(card);

    return card;
  }
}

export { CardRepository };
