import { CardSets } from '../infra/typeorm/entities/CardSets';

export interface ICardsSetsRepository {
  findAll(): Promise<CardSets[]>;
}
