import { Injectable } from '@nestjs/common';
import { ITypesRepository } from 'src/modules/type/repositories/ITypesRepository';
import { EntityManager, MoreThan, Repository } from 'typeorm';
import { Type } from '../entities/Type';

@Injectable()
class TypesRepository implements ITypesRepository {
  private ormRepository: Repository<Type>;

  constructor(manager: EntityManager) {
    this.ormRepository = manager.getRepository(Type);
  }

  public async findAll() {
    return await this.ormRepository.find();
  }

}

export { TypesRepository };
