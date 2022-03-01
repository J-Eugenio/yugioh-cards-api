import { Injectable } from '@nestjs/common';
import { ICreateTypeDTO } from 'src/modules/type/dtos/ICreateTypeDTO';
import { IUpdateTypeDTO } from 'src/modules/type/dtos/IUpdateTypeDTO';
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

  public async findById(id: number){
    return await this.ormRepository.findOne({
      where: {
        id
      },
    })
  }

  public async createType(data: ICreateTypeDTO): Promise<Type> {
    const type = this.ormRepository.create(data);

    await this.ormRepository.save(type);
    
    return type;
  }

  public async updateType(data: IUpdateTypeDTO): Promise<Type> {
    const type = this.ormRepository.create(data);

    await this.ormRepository.save(type);
    
    return type;
  }

}

export { TypesRepository };
