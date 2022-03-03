import { Injectable } from '@nestjs/common';
import { ICreateCardSetsDTO } from 'src/modules/card_set/dtos/ICreateCardSetsDTO';
import { IUpdateCardSetsDTO } from 'src/modules/card_set/dtos/IUpdateCardSetsDTO';
import { ICardsSetsRepository } from 'src/modules/card_set/repositories/ICardsSetsRepository';
import { EntityManager, Repository } from 'typeorm';
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

  public async findByCode(set_code: string) {
    return await this.ormRepository.findOne({
      where: {
        set_code,
      },
    });
  }

  public async findBySetId(set_id: number) {
    return await this.ormRepository.find({
      where: {
        set_id,
      },
    });
  }

  public async findByParams({ set_code, set_rarity }): Promise<CardSets[]>{
    return await this.ormRepository.query(`
      SELECT * FROM card_sets cst
      LEFT JOIN sets st ON st.set_code ILIKE cst.set_code
      WHERE
      CASE WHEN $1 IS NOT NULL
        THEN cst.set_code LIKE $1
        ELSE true
      END
      AND
      CASE WHEN $2 IS NOT NULL 
        THEN cst.set_rarity LIKE $2
        ELSE true
      END
    `, [set_code, set_rarity])
  }

  public async createCardSet(data: ICreateCardSetsDTO): Promise<CardSets> {
    const card_set = this.ormRepository.create(data);

    await this.ormRepository.save(card_set);

    return card_set;
  }

  public async updateCardSet(
    id: number,
    data: IUpdateCardSetsDTO,
  ): Promise<CardSets> {
    await this.ormRepository.update(id, data);
    const card_set = await this.ormRepository.findOne(id);

    return card_set;
  }
}

export { CardsSetsRepository };
