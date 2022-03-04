import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardModule } from './modules/card/card.module';
import { CardSet } from './modules/card_set/card-set.module';
import { Image } from './modules/Image/image.module';
import { RaceModule } from './modules/race/race.module';
import { SetModule } from './modules/Set/set.module';
import { TypeModule } from './modules/type/type.module';
import { UserModule } from './modules/user/user.module';
import { typeOrmConfig } from './shared/config/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ThrottlerModule.forRoot({
      ttl: 1,
      limit: 1,
    }),
    CardModule,
    CardSet,
    SetModule,
    TypeModule,
    RaceModule,
    Image,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
