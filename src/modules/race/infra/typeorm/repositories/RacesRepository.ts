import { Injectable } from '@nestjs/common';
import { ICreateRaceDTO } from 'src/modules/race/dtos/ICreateRaceDTO';
import { IUpdateRaceDTO } from 'src/modules/race/dtos/IUpdateRaceDTO';
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

  public async findById(id: number) {
    return await this.ormRepository.findOne({
      where: {
        id,
      },
    });
  }

  public async createRace(data: ICreateRaceDTO): Promise<Race> {
    const race = this.ormRepository.create(data);

    await this.ormRepository.save(race);

    return race;
  }

  public async updateRace(id: number, data: IUpdateRaceDTO): Promise<Race> {
    await this.ormRepository.update(id, data);
    const race = await this.ormRepository.findOne(id);

    return race;
  }
}

export { RacesRepository };
