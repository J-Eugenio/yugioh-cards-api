import { Injectable } from '@nestjs/common';
import { ISetsRepository } from 'src/modules/Set/repositories/ISetsRepository';
import { EntityManager, MoreThan, Repository } from 'typeorm';
import { Set } from '../entities/Set';

@Injectable()
class SetsRepository implements ISetsRepository {
  private ormRepository: Repository<Set>;

  constructor(manager: EntityManager) {
    this.ormRepository = manager.getRepository(Set);
  }

  public async findAll() {
    return await this.ormRepository.find();
  }

}

export { SetsRepository };
