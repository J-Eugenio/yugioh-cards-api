import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { jwtConstants } from './constants';

export interface Payload {
  cpf: string;
  ativo: boolean;
  redef?: number;
  chaves: string[];
}

interface jwtOptions {
  headers: {
    authorization: string;
  };
}
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
      passReqToCallback: true,
    });
  }

  async validate(req: jwtOptions): Promise<any> {
    const token = req.headers.authorization;
    /* const employee = await this.employeeRepository.findEmployeeByToken(token);
    if (!employee) {
      throw new UnauthorizedException();
    } */

    return true;
  }
}
