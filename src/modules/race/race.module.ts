import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RaceController } from './infra/http/RaceController';
import { Race } from './infra/typeorm/entities/Race';
import { RacesRepository } from './infra/typeorm/repositories/RacesRepository';
import { FindRacesUseCase } from './useCase/findRaces/FindRacesUseCase';

@Module({
  imports: [TypeOrmModule.forFeature([Race])],
  providers: [
    FindRacesUseCase,
    {
      provide: 'RacesRepository',
      inject: [RacesRepository],
      useClass: RacesRepository,
    },
  ],
  controllers: [RaceController],
})
export class RaceModule {}
