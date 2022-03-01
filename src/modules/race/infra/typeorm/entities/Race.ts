import { Card } from 'src/modules/card/infra/typeorm/entities/Card';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'races',
})
export class Race {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'character varying',
    nullable: false,
  })
  name: string;

  card: Card;
}
