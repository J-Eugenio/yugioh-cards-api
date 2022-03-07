import { ICreateRaceDTO } from '../dtos/ICreateRaceDTO';
import { IUpdateRaceDTO } from '../dtos/IUpdateRaceDTO';
import { Race } from '../infra/typeorm/entities/Race';

export interface IRacesRepository {
  findAll(): Promise<Race[]>;
  findById(id: number): Promise<Race>;
  createRace(data: ICreateRaceDTO): Promise<Race>;
  updateRace(id: number, data: IUpdateRaceDTO): Promise<Race>;
}
