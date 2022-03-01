import { ICreateSetsDTO } from '../dtos/ICreateSetsDTO';
import { IUpdateSetsDTO } from '../dtos/IUpdateSetsDTO';
import { Set } from '../infra/typeorm/entities/Set';

export interface ISetsRepository {
  findAll(): Promise<Set[]>;
  findById(id: number): Promise<Set>;
  createSet(data: ICreateSetsDTO): Promise<Set>;
  updateSet(data: IUpdateSetsDTO): Promise<Set>;
}
