import { ICreateCardDTO } from '../dtos/ICreateCardDTO';
import { IUpdateCardDTO } from '../dtos/IUpdateCardDTO';
import { Card } from '../infra/typeorm/entities/Card';

export interface ICardRepository {
  findAll(): Promise<Card[]>;
  findById(id: number): Promise<Card>;
  createCard(data: ICreateCardDTO): Promise<Card>;
  updateCard(data: IUpdateCardDTO): Promise<Card>;
}
