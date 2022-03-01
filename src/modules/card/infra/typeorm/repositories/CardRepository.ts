import { Injectable } from '@nestjs/common';
import { ICreateCardDTO } from 'src/modules/card/dtos/ICreateCardDTO';
import { ICardRepository } from 'src/modules/card/repositories/ICardRepository';
import { EntityManager, MoreThan, Repository } from 'typeorm';
import { Card } from '../entities/Card';

@Injectable()
class CardRepository implements ICardRepository {
  private ormRepository: Repository<Card>;

  constructor(manager: EntityManager) {
    this.ormRepository = manager.getRepository(Card);
  }

  public async findAll() {
    return await this.ormRepository.find();
  }

  public async create(data: ICreateCardDTO): Promise<string> {
    const { id, ...res } = this.ormRepository.create(data);

    await this.ormRepository.save({
      id: data.id,
      ...res,
    });
    return `ID: ${data.id} Carta: ${
      res.name_pt ? res.name_pt : res.name || 'Sem Nome' + data.id
    } importada com sucesso!!`;
  }
}

export { CardRepository };
