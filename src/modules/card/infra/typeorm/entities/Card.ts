import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'cards',
})
class Card {
  @PrimaryColumn()
  id: number;

  @Column({
    type: 'character varying',
    nullable: false,
  })
  name: string;

  @Column({
    type: 'character varying',
    nullable: false,
  })
  name_pt: string;

  @Column({
    type: 'integer',
    nullable: true,
  })
  type?: number;

  @Column({
    type: 'character varying',
    nullable: false,
  })
  desc: string;

  @Column({
    type: 'character varying',
    nullable: false,
  })
  desc_pt: string;

  @Column({
    type: 'integer',
    nullable: true,
  })
  atk?: number;

  @Column({
    type: 'integer',
    nullable: true,
  })
  def?: number;

  @Column({
    type: 'integer',
    nullable: true,
  })
  level?: number;

  @Column({
    type: 'integer',
    nullable: true,
  })
  race?: number;

  @Column({
    type: 'character varying',
    nullable: true,
  })
  attribute?: string;
}

export { Card };
