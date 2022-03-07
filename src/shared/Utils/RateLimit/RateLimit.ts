import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { rateLimit } from 'utils-decorators';

@Injectable()
export class LocationRateLimitInterceptor implements NestInterceptor {
  @rateLimit({
    allowedCalls: 15,
    timeSpanMs: 1000 * 1, // 1 second
    keyResolver: (context: ExecutionContext) =>
      context.switchToHttp().getRequest().ip,
    exceedHandler: () => {
      throw new HttpException(
        'Rate limit exceeded: Max 15 Req Per Second',
        HttpStatus.TOO_MANY_REQUESTS,
      );
    },
  })
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    return next.handle();
  }
}
