export class ICreateCardDTO {
  id: number;
  name: string;
  name_pt: string;
  type?: number;
  desc: string;
  desc_pt: string;
  atk?: number;
  def?: number;
  level?: number;
  race?: number;
  attribute?: string;
}
