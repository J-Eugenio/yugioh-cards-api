import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { ITokenProvider } from '../interface/ITokenProvider';
import { Injectable } from '@nestjs/common';
@Injectable()
class NestJWTTokenProvider implements ITokenProvider {
  constructor(private jwtService: JwtService) {}

  public async generateToken(id: string) {
    const payload: JwtSignOptions = {
      subject: id,
    };

    return this.jwtService.sign(payload);
  }
}

export { NestJWTTokenProvider };
