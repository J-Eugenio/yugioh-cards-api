import { Card } from '../infra/typeorm/entities/Card';

export interface ICardRepository {
  findAll(): Promise<Card[]>;
}
