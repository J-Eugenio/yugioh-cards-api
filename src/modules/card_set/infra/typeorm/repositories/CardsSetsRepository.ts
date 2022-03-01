import { Injectable } from '@nestjs/common';
import { ICreateCardDTO } from 'src/modules/card/dtos/ICreateCardDTO';
import { ICreateCardSetsDTO } from 'src/modules/card_set/dtos/ICreateCardSetsDTO';
import { IUpdateCardSetsDTO } from 'src/modules/card_set/dtos/IUpdateCardSetsDTO';
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

  

  public async findByCode(set_code: string){
    return await this.ormRepository.findOne({
      where: {
        set_code
      },
    })
  }

  public async findBySetId(set_id: number){
    return await this.ormRepository.find({
      where: {
        set_id
      },
    })
  }

  public async createCardSet(data: ICreateCardSetsDTO): Promise<CardSets> {
    const card_set = this.ormRepository.create(data);

    await this.ormRepository.save(card_set);
    
    return card_set;
  }

  public async updateCardSet(data: IUpdateCardSetsDTO): Promise<CardSets> {
    const card_set = this.ormRepository.create(data);

    await this.ormRepository.save(card_set);
    
    return card_set;
  }

}

export { CardsSetsRepository };
