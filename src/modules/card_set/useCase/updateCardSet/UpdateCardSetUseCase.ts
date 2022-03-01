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
    const check_exists_product = await this.cardsSetsRepository.findByCode(data.set_code);

    if (!check_exists_product) {
      throw new BadRequestException("Esse Card Set não está cadastrado!");
    }

    const product = await this.cardsSetsRepository.updateCardSet(data);

    return product;
  }
}

export { UpdateCardSetUseCase }