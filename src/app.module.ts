import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardModule } from './modules/card/card.module';
import { CardSet } from './modules/card_set/card-set.module';
import { typeOrmConfig } from './shared/config/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), CardModule, CardSet
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
