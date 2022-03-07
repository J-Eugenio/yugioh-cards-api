import {
  ExecutionContext,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { IUserRepository } from 'src/modules/user/repositories/IUserRepository';

@Injectable()
export class JwtPublicAuthGuard {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: IUserRepository,
  ) {}
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    const api_token = request.headers.api_token && request.headers.api_token;

    if (!api_token) {
      throw new UnauthorizedException();
    }

    const user = await this.userRepository.findByApiToken(api_token);

    if (!user) {
      throw new NotFoundException('API Key not found!!');
    }

    return context;
  }

  handleRequest(err, user, info) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
