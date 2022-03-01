import { BadRequestException, Inject, NotFoundException } from "@nestjs/common";
import { ICreateCardSetsDTO } from "../../dtos/ICreateCardSetsDTO";
import { CardSets } from "../../infra/typeorm/entities/CardSets";
import { ICardsSetsRepository } from "../../repositories/ICardsSetsRepository";


class CreateCardSetUseCase {
  constructor(
    @Inject('CardsSetsRepository')
    private cardsSetsRepository: ICardsSetsRepository,
  ) { }

  public async execute(data: ICreateCardSetsDTO): Promise<CardSets> {
    // Verificação para existência de um produto
    const check_exists_product = await this.cardsSetsRepository.findByCode(data.set_code);

    if (!check_exists_product) {
      throw new BadRequestException("Esse Card Set já está cadastrado!");
    }

    const product = await this.cardsSetsRepository.createCardSet(data);

    return product;
  }
}

export { CreateCardSetUseCase }