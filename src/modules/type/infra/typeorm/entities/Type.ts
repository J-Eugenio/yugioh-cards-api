import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'types',
  schema: 'public',
})
class Type {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'character varying',
    nullable: false,
  })
  name: string;

  @Column({
    type: 'integer',
    nullable: false,
  })
  type: number;
}

export { Type };
