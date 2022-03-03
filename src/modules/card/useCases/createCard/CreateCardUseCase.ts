import { Inject } from "@nestjs/common";
import { ICreateCardDTO } from "../../dtos/ICreateCardDTO";
import { Card } from "../../infra/typeorm/entities/Card";
import { ICardRepository } from "../../repositories/ICardRepository";

class CreateCardUseCase {
    constructor(
      @Inject('CardRepository')
      private cardRepository: ICardRepository,
    ) {}

  public async execute(data: ICreateCardDTO): Promise<Card> {

    const card = await this.cardRepository.createCard(data);

    return card;
  }
}

export { CreateCardUseCase }