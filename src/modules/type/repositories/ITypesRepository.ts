import { Type } from '../infra/typeorm/entities/Type';

export interface ITypesRepository {
  findAll(): Promise<Type[]>;
}
