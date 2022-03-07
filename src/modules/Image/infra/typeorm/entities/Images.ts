import { Card } from 'src/modules/card/infra/typeorm/entities/Card';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'images',
})
export class Images {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  card_id: number;

  @Column({
    type: 'character varying',
    nullable: false,
  })
  image_url: string;

  @Column({
    type: 'character varying',
    nullable: false,
  })
  name: string;

  //Relacionamentos
  @ManyToOne(() => Card, (card) => card.images)
  @JoinColumn({ name: 'card_id' })
  card: Card;
}
