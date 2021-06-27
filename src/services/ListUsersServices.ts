import { getCustomRepository, Repository } from 'typeorm';
import { classToPlain } from 'class-transformer';

import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';

class ListUsersServices {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
  }

  async execute() {
    const users = await this.userRepository.find();
  
    return classToPlain(users);
  }
}

export { ListUsersServices };