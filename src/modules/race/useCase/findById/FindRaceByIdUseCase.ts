import { Inject, Injectable } from '@nestjs/common';
import { Race } from '../../infra/typeorm/entities/Race';
import { IRacesRepository } from '../../repositories/IRacesRepository';

@Injectable()
export class FindRaceByIdUseCase {
  constructor(
    @Inject('RacesRepository')
    private racesRepository: IRacesRepository,
  ) {}

  public async execute(id: number): Promise<Race> {
    return await this.racesRepository.findById(id);
  }
}
