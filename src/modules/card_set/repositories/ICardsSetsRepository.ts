import { ICreateCardSetsDTO } from '../dtos/ICreateCardSetsDTO';
import { IUpdateCardSetsDTO } from '../dtos/IUpdateCardSetsDTO';
import { CardSets } from '../infra/typeorm/entities/CardSets';

export interface ICardsSetsRepository {
  createCardSet(data: ICreateCardSetsDTO): Promise<CardSets>;
  updateCardSet(id: number, data: IUpdateCardSetsDTO): Promise<CardSets>;
  findAll(): Promise<CardSets[]>;
  findBySetId(set_id: number): Promise<CardSets[]>;
  findByCode(set_code: string): Promise<CardSets>;
  findByRarity(set_rarity: string): Promise<CardSets[]>;
}
