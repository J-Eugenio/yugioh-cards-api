import {
  BadRequestException,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';

interface IPrivateRouteProps {
  subject: number;
  access: number;
}
@Injectable()
export class JwtPrivateAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    const jwt = new JwtService({
      secret: jwtConstants.secret,
    });

    const token =
      request.headers.authorization &&
      request.headers.authorization.split(' ')[1];

    try {
      jwt.verify(token);
    } catch {
      throw new BadRequestException();
    }

    if (!token) {
      throw new UnauthorizedException();
    }

    const data = jwt.decode(token) as IPrivateRouteProps;

    if (data.access !== 4) {
      throw new UnauthorizedException();
    }

    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
