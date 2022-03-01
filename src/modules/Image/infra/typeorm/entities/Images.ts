import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
