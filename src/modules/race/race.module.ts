import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnsureAuthenticate } from 'src/shared/middleware/auth/';
import { UserRepository } from '../user/infra/typeorm/repositories/UserRepository';
import { RaceController } from './infra/http/RaceController';
import { Race } from './infra/typeorm/entities/Race';
import { RacesRepository } from './infra/typeorm/repositories/RacesRepository';
import { CreateRaceUseCase } from './useCase/createRace/CreateRaceUseCase';
import { FindRaceByIdUseCase } from './useCase/findById/FindRaceByIdUseCase';
import { FindRacesUseCase } from './useCase/findRaces/FindRacesUseCase';
import { UpdateRaceUseCase } from './useCase/updateRace/UpdateRaceUseCase';

@Module({
  imports: [TypeOrmModule.forFeature([Race])],
  providers: [
    FindRacesUseCase,
    FindRaceByIdUseCase,
    CreateRaceUseCase,
    UpdateRaceUseCase,
    EnsureAuthenticate,
    {
      provide: 'RacesRepository',
      inject: [RacesRepository],
      useClass: RacesRepository,
    },
    {
      provide: 'UserRepository',
      inject: [UserRepository],
      useClass: UserRepository,
    },
  ],
  controllers: [RaceController],
})
export class RaceModule {}
