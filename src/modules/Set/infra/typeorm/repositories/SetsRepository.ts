import { Injectable } from '@nestjs/common';
import { ICreateSetsDTO } from 'src/modules/Set/dtos/ICreateSetsDTO';
import { IUpdateSetsDTO } from 'src/modules/Set/dtos/IUpdateSetsDTO';
import { ISetsRepository } from 'src/modules/Set/repositories/ISetsRepository';
import { EntityManager, Repository } from 'typeorm';
import { Set } from '../entities/Set';

@Injectable()
class SetsRepository implements ISetsRepository {
  private ormRepository: Repository<Set>;

  constructor(manager: EntityManager) {
    this.ormRepository = manager.getRepository(Set);
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

  public async createSet(data: ICreateSetsDTO): Promise<Set> {
    const set = this.ormRepository.create(data);

    await this.ormRepository.save(set);

    return set;
  }

  public async updateSet(id: number, data: IUpdateSetsDTO): Promise<Set> {
    await this.ormRepository.update(id, data);
    const set = await this.ormRepository.findOne(id);

    return set;
  }
}

export { SetsRepository };
