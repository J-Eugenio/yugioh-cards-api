import { BadRequestException, Inject, NotFoundException } from "@nestjs/common";
import { ICreateTypeDTO } from "../../dtos/ICreateTypeDTO";
import { Type } from "../../infra/typeorm/entities/Type";
import { ITypesRepository } from "../../repositories/ITypesRepository";

class CreateTypeUseCase {
  constructor(
    @Inject('TypesRepository')
    private typesRepository: ITypesRepository,
  ) {}

  public async execute(data: ICreateTypeDTO): Promise<Type> {

    const type = await this.typesRepository.createType(data);

    return type;
  }
}

export { CreateTypeUseCase }