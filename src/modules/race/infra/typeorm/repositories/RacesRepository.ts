import { Injectable } from '@nestjs/common';
import { IRacesRepository } from 'src/modules/race/repositories/IRacesRepository';
import { EntityManager, Repository } from 'typeorm';
import { Race } from '../entities/Race';

@Injectable()
class RacesRepository implements IRacesRepository {
  private ormRepository: Repository<Race>;

  constructor(manager: EntityManager) {
    this.ormRepository = manager.getRepository(Race);
  }

  public async findAll() {
    return await this.ormRepository.find();
  }

}

export { RacesRepository };
