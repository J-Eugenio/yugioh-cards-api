import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../infra/typeorm/entities/User';

export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findByUserName(username: string): Promise<User>;
  findByID(id: number): Promise<User>;
  findByApiToken(token: string): Promise<boolean>;
}
