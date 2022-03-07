import { JwtService } from '@nestjs/jwt';
import { ITokenProvider } from '../interface/ITokenProvider';
import { Injectable } from '@nestjs/common';
@Injectable()
class NestJWTTokenProvider implements ITokenProvider {
  constructor(private jwtService: JwtService) {}

  public async generateToken(id: string, access: number) {
    const payload = {
      subject: id,
      access: access,
    };

    return this.jwtService.sign(payload);
  }
}

export { NestJWTTokenProvider };
