import { Race } from '../infra/typeorm/entities/Race';

export interface IRacesRepository {
  findAll(): Promise<Race[]>;
}
