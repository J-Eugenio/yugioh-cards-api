import { Injectable } from '@nestjs/common';
import { ICreateUserDTO } from 'src/modules/user/dtos/ICreateUserDTO';
import { IUserRepository } from 'src/modules/user/repositories/IUserRepository';
import { EntityManager, Repository } from 'typeorm';
import { User } from '../entities/User';

@Injectable()
class UserRepository implements IUserRepository {
  private readonly ormRepository: Repository<User>;

  constructor(manager: EntityManager) {
    this.ormRepository = manager.getRepository(User);
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const created_user = this.ormRepository.create(data);
    await this.ormRepository.save(created_user);
    return created_user;
  }

  public async findByEmail(email: string): Promise<User> {
    return await this.ormRepository.findOne({
      where: {
        email,
      },
    });
  }

  public async findByUserName(username: string): Promise<User> {
    return await this.ormRepository.findOne({
      where: {
        username,
      },
    });
  }
}

export { UserRepository };
