import { IsNumberString, IsNotEmpty } from 'class-validator';

export class IFindByIdDTO {
  @IsNumberString()
  @IsNotEmpty()
  id: number;
}
