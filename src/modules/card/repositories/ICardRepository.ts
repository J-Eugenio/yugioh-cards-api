import { ICreateCardDTO } from '../dtos/ICreateCardDTO';
import { IFilterCardsParamsDTO } from '../dtos/IFilterCardsParamsDTO';
import { IUpdateCardDTO } from '../dtos/IUpdateCardDTO';
import { Card } from '../infra/typeorm/entities/Card';

export interface ICardRepository {
  findAll(): Promise<Card[]>;
  findById(id: number): Promise<Card>;
  findByParams({name, name_pt, atk, def, level, attribute}): Promise<Card[]>
  createCard(data: ICreateCardDTO): Promise<Card>;
  updateCard(id: number, data: IUpdateCardDTO): Promise<Card>;
}
