import { BadRequestException, Inject, NotFoundException } from "@nestjs/common";
import { ICreateSetsDTO } from "../../dtos/ICreateSetsDTO";
import { Set } from "../../infra/typeorm/entities/Set";
import { ISetsRepository } from "../../repositories/ISetsRepository";


class CreateSetUseCase {
  constructor(
    @Inject('SetsRepository')
    private setsRepository: ISetsRepository,
  ) { }

  public async execute(data: ICreateSetsDTO): Promise<Set> {

    const set = await this.setsRepository.createSet(data);

    return set;
  }
}

export { CreateSetUseCase }