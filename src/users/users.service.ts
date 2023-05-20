import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserDetails } from 'src/auth/types';

type UserFindOptionsWhere = FindOptionsWhere<User> | FindOptionsWhere<User>;
[];

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findUser(where: UserFindOptionsWhere) {
    return this.userRepository.findOneBy(where);
  }

  async createUser(details: UserDetails) {
    const newUser = this.userRepository.create(details);
    return this.userRepository.save(newUser);
  }
}
