import { Inject, Injectable } from '@nestjs/common';
import { IRacesRepository } from '../../repositories/IRacesRepository';

@Injectable()
export class FindRacesUseCase {
  constructor(
    @Inject('RacesRepository')
    private racesRepository: IRacesRepository,
  ) {}

  public async execute() {
    return await this.racesRepository.findAll();
  }
}
