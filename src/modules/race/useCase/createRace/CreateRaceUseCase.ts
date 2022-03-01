import { BadRequestException, Inject, NotFoundException } from "@nestjs/common";
import { ICreateRaceDTO } from "../../dtos/ICreateRaceDTO";
import { Race } from "../../infra/typeorm/entities/Race";
import { IRacesRepository } from "../../repositories/IRacesRepository";

class CreateRaceUseCase {
  constructor(
    @Inject('RacesRepository')
    private racesRepository: IRacesRepository,
  ) {}

  public async execute(data: ICreateRaceDTO): Promise<Race> {
    const race = await this.racesRepository.createRace(data);

    return race;
  }
}

export { CreateRaceUseCase }