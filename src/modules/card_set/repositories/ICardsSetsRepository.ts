import { ICreateCardSetsDTO } from '../dtos/ICreateCardSetsDTO';
import { IUpdateCardSetsDTO } from '../dtos/IUpdateCardSetsDTO';
import { CardSets } from '../infra/typeorm/entities/CardSets';

export interface ICardsSetsRepository {
  findAll(): Promise<CardSets[]>;
  findByCode(set_code: string): Promise<CardSets>;
  findBySetId(set_id: number): Promise<CardSets[]>;
  createCardSet(data: ICreateCardSetsDTO): Promise<CardSets>;
  updateCardSet(data: IUpdateCardSetsDTO): Promise<CardSets>;
}
