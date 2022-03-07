import { ICreateCardDTO } from '../dtos/ICreateCardDTO';
import { IUpdateCardDTO } from '../dtos/IUpdateCardDTO';
import { Card } from '../infra/typeorm/entities/Card';

export interface ICardRepository {
  createCard(data: ICreateCardDTO): Promise<Card>;
  updateCard(id: number, data: IUpdateCardDTO): Promise<Card>;
  findAll(): Promise<Card[]>;
  findById(id: number): Promise<Card>;
  findByName(name: string): Promise<Card[]>;
  findByNamePT(name_pt: string): Promise<Card[]>;
  findByAtk(atk: number): Promise<Card[]>;
  findByDef(def: number): Promise<Card[]>;
  findByLevel(level: number): Promise<Card[]>;
  findByAttribute(attribute: string): Promise<Card[]>;
}
