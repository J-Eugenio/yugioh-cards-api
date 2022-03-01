import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardModule } from './modules/card/card.module';
import { typeOrmConfig } from './shared/config/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), CardModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
