import { IsString } from 'class-validator';

export class IFindByIconNameDTO {
  @IsString()
  name: string;
}
