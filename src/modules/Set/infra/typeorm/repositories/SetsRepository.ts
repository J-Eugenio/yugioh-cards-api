import { Injectable } from '@nestjs/common';
import { ICreateSetsDTO } from 'src/modules/Set/dtos/ICreateSetsDTO';
import { IUpdateSetsDTO } from 'src/modules/Set/dtos/IUpdateSetsDTO';
import { ISetsRepository } from 'src/modules/Set/repositories/ISetsRepository';
import { EntityManager, Repository } from 'typeorm';
import { Sets } from '../entities/Set';

@Injectable()
class SetsRepository implements ISetsRepository {
  private ormRepository: Repository<Sets>;

  constructor(manager: EntityManager) {
    this.ormRepository = manager.getRepository(Sets);
  }

  public async findAll() {
    return await this.ormRepository.find({
      relations: ['cardSets', 'cardSets.card'],
    });
  }

  public async findById(id: number) {
    return await this.ormRepository.findOne({
      where: {
        id,
      },
    });
  }

  public async createSet(data: ICreateSetsDTO): Promise<Sets> {
    const set = this.ormRepository.create(data);

    await this.ormRepository.save(set);

    return set;
  }

  public async updateSet(id: number, data: IUpdateSetsDTO): Promise<Sets> {
    await this.ormRepository.update(id, data);
    const set = await this.ormRepository.findOne(id);

    return set;
  }
}

export { SetsRepository };
