import { BadRequestException, Inject, NotFoundException } from "@nestjs/common";
import { IUpdateCardSetsDTO } from "../../dtos/IUpdateCardSetsDTO";
import { CardSets } from "../../infra/typeorm/entities/CardSets";
import { ICardsSetsRepository } from "../../repositories/ICardsSetsRepository";


class UpdateCardSetUseCase {
  constructor(
    @Inject('CardsSetsRepository')
    private cardsSetsRepository: ICardsSetsRepository,
  ) { }

  public async execute(data: IUpdateCardSetsDTO): Promise<CardSets> {
    // Verificação para existência de um produto
    const check_exists_card = await this.cardsSetsRepository.findByCode(data.set_code);

    if (!check_exists_card) {
      throw new BadRequestException("Esse Card Set não está cadastrado!");
    }

    const card = await this.cardsSetsRepository.updateCardSet(data);

    return card;
  }
}

export { UpdateCardSetUseCase }