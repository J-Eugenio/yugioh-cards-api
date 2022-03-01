import { Set } from '../infra/typeorm/entities/Set';

export interface ISetsRepository {
  findAll(): Promise<Set[]>;
}
