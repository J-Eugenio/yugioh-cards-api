import { ICreateTypeDTO } from '../dtos/ICreateTypeDTO';
import { IUpdateTypeDTO } from '../dtos/IUpdateTypeDTO';
import { Type } from '../infra/typeorm/entities/Type';

export interface ITypesRepository {
  findAll(): Promise<Type[]>;
  findById(id: number): Promise<Type>;
  createType(data: ICreateTypeDTO): Promise<Type>;
  updateType(id: number, data: IUpdateTypeDTO): Promise<Type>;
}
