import { Injectable } from '@nestjs/common';
<<<<<<< HEAD
import { ICreateCardDTO } from 'src/modules/card/dtos/ICreateCardDTO';
import { IUpdateCardDTO } from 'src/modules/card/dtos/IUpdateCardDTO';
=======
>>>>>>> 24d3003f83327fe6cf3f76b8ad4486ba7fa20938
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
<<<<<<< HEAD
    return await this.ormRepository.find();
  }

  public async findById(id: number){
    return await this.ormRepository.findOne({
      where: {
        id
      },
    })
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
=======
    return await this.ormRepository.find({
      relations: ['images'],
    });
>>>>>>> 24d3003f83327fe6cf3f76b8ad4486ba7fa20938
  }

}

export { CardRepository };
