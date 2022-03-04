import { BadRequestException, Inject } from '@nestjs/common';
import { IHashProvider } from 'src/shared/hash/interface/IHashProvider';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../infra/typeorm/entities/User';
import { IUserRepository } from '../../repositories/IUserRepository';

export class CreateUserUseCase {
  constructor(
    @Inject('HashProvider')
    private readonly hashProvider: IHashProvider,

    @Inject('UserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  public async execute({
    email,
    name,
    password,
    username,
    api_key,
    instagram_profile,
  }: ICreateUserDTO): Promise<User> {
    const userEmailExists = await this.userRepository.findByEmail(email);

    if (userEmailExists) {
      throw new BadRequestException('Usuário com esse email já existe!');
    }

    const userNameExists = await this.userRepository.findByUserName(username);

    if (userNameExists) {
      throw new BadRequestException('Usuário com esse email já existe!');
    }

    const password_hash = await this.hashProvider.generateHash(password);

    const user = await this.userRepository.create({
      name,
      email,
      password: password_hash,
      username,
      instagram_profile,
    });

    return user;
  }
}
