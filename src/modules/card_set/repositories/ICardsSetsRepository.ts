import { ICreateCardSetsDTO } from '../dtos/ICreateCardSetsDTO';
import { CardSets } from '../infra/typeorm/entities/CardSets';

export interface ICardsSetsRepository {
  findAll(): Promise<CardSets[]>;
  findByCode(set_code: string): Promise<CardSets>;
  createCardSet(data: ICreateCardSetsDTO): Promise<CardSets>;
  updateCardSet(data: ICreateCardSetsDTO): Promise<CardSets>;
}
