import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ITokenProvider } from 'src/shared/auth/TokenProvider/interface/ITokenProvider';
import { IHashProvider } from 'src/shared/hash/interface/IHashProvider';
import { IAuthenticateUserDTO } from '../../dtos/IAuthenticateUserDTO';
import { IResponseTokenDTO } from '../../dtos/IResponseTokenDTO';
import { IUserRepository } from '../../repositories/IUserRepository';

@Injectable()
class AuthenticateUserUseCase {
  constructor(
    @Inject('UserRepository')
    private userRepository: IUserRepository,

    @Inject('HashProvider')
    private hashProvider: IHashProvider,

    @Inject('TokenProvider')
    private tokenProvider: ITokenProvider,
  ) {}

  public async execute({
    username,
    password,
  }: IAuthenticateUserDTO): Promise<IResponseTokenDTO> {
    const user = await this.userRepository.findByUserName(username);

    if (!user) {
      throw new UnauthorizedException('Combinação Usuario/senha incorreta!');
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatched) {
      throw new UnauthorizedException('Combinação Usuario/senha incorreta!');
    }

    const token = await this.tokenProvider.generateToken(user.id);

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        instagram_profile: user.instagram_profile,
        api_key: user.api_key,
      },
    };
  }
}

export { AuthenticateUserUseCase };
