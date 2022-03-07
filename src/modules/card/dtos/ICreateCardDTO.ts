import { ApiProperty } from '@nestjs/swagger';

export class ICreateCardDTO {
  @ApiProperty({
    description: 'Nome em EN do card',
    nullable: false,
    default: 'Blue-Eyes White Dragon',
  })
  name: string;

  @ApiProperty({
    description: 'Nome em PT-BR do card',
    nullable: false,
    default: 'Dragao branco de olhos azuis',
  })
  name_pt: string;

  @ApiProperty({
    description: 'Tipo da carta',
    nullable: true,
    default: 'Normal Monster',
  })
  type?: number;

  @ApiProperty({
    description: 'Descricao da carta em EN',
    nullable: false,
    default:
      'This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.',
  })
  desc: string;

  @ApiProperty({
    description: 'Descricao da carta em PT-BR',
    nullable: false,
    default:
      'Ofereça 1 monstro como Tributo; Invoque por Invocação-Especial 1 monstro de Nível 7 da sua mão que possa ser Invocado por Invocação-Normal/Baixado. Ele não pode atacar neste turno.',
  })
  desc_pt: string;

  @ApiProperty({
    description: 'Poder de ataque da carta(Se for monstro)',
    nullable: true,
    default: 3000,
  })
  atk?: number;

  @ApiProperty({
    description: 'Defesa da carta(Se for monstro)',
    nullable: true,
    default: 2500,
  })
  def?: number;

  @ApiProperty({
    description: 'Level da carta',
    nullable: true,
    default: 8,
  })
  level?: number;

  @ApiProperty({
    description: 'Referencia da tabela `races` com a carta ( 8 = Dragon)',
    nullable: true,
    default: 8,
  })
  race?: number;

  @ApiProperty({
    description: 'Atributo da carta',
    nullable: true,
    default: 'LIGHT',
  })
  attribute?: string;

  @ApiProperty({
    description: 'Archetype da carta',
    nullable: true,
    default: 'Blue-Eyes"',
  })
  archetype?: string;
}
