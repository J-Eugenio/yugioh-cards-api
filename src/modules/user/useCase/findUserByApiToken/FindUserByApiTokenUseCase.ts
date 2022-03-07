import { Inject } from '@nestjs/common';
import { UserRepository } from '../../infra/typeorm/repositories/UserRepository';

export class FindUserByApiTokenUseCase {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) {}

  public async execute(token: string): Promise<boolean> {
    return await this.userRepository.findByApiToken(token);
  }
}
