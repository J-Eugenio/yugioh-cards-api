import { BadRequestException, Inject, NotFoundException } from "@nestjs/common";
import { IUpdateCardDTO } from "../../dtos/IUpdateCardDTO";
import { Card } from "../../infra/typeorm/entities/Card";
import { ICardRepository } from "../../repositories/ICardRepository";

class UpdateCardUseCase {
  constructor(
    @Inject('CardRepository')
    private cardRepository: ICardRepository,
  ) {}

  public async execute(data: IUpdateCardDTO): Promise<Card> {
    // Verificação para existência de um produto
    const check_exists_card = await this.cardRepository.findById(data.id);

    if (!check_exists_card) {
      throw new BadRequestException("Esse Card não está cadastrado!");
    }

    const card = await this.cardRepository.updateCard(data);

    return card;
  }
}

export { UpdateCardUseCase }