import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';
import { IUserRepository } from 'src/modules/user/repositories/IUserRepository';
import { User } from 'src/modules/user/infra/typeorm/entities/User';

interface IPayload {
  subject: number;
}

@Injectable()
class EnsureAuthenticate extends PassportStrategy(Strategy) {
  constructor(
    @Inject('UserRepository')
    private userRepository: IUserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  public async validate(payload: IPayload): Promise<User> {
    const { subject } = payload;

    const user = await this.userRepository.findByID(subject);

    return user;
  }
}

export { EnsureAuthenticate };
