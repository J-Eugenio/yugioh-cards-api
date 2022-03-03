import { ICreateSetsDTO } from '../dtos/ICreateSetsDTO';
import { IUpdateSetsDTO } from '../dtos/IUpdateSetsDTO';
import { Sets } from '../infra/typeorm/entities/Set';

export interface ISetsRepository {
  findAll(): Promise<Sets[]>;
  findById(id: number): Promise<Sets>;
  findByName(set_name: string): Promise<Sets[]>;
  createSet(data: ICreateSetsDTO): Promise<Sets>;
  updateSet(id: number, data: IUpdateSetsDTO): Promise<Sets>;
}
