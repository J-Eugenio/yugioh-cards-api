import { BadRequestException, Inject, NotFoundException } from "@nestjs/common";
import { IUpdateRaceDTO } from "../../dtos/IUpdateRaceDTO";
import { Race } from "../../infra/typeorm/entities/Race";
import { IRacesRepository } from "../../repositories/IRacesRepository";


class UpdateRaceUseCase {
  constructor(
    @Inject('RacesRepository')
    private racesRepository: IRacesRepository,
  ) {}

  public async execute(data: IUpdateRaceDTO): Promise<Race> {
    // Verificação para existência de um produto
    const check_exists_race = await this.racesRepository.findById(data.id);

    if (!check_exists_race) {
      throw new BadRequestException("Esse race não está cadastrado!");
    }

    const race = await this.racesRepository.updateRace(data);

    return race;
  }
}

export { UpdateRaceUseCase }