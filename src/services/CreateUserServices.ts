import { getCustomRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '../dtos/CreateUserDTO';
import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';

class CreateUserServices {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
  }

  async execute({ email, name, admin }: ICreateUserDTO): Promise<User> {

    if (!email) throw new Error('E-mail incorrect');

    const userExists = await this.userRepository.findOne({ email });

    if (userExists) throw new Error('User already exists');

    const user = this.userRepository.create({
      name,
      email,
      admin,
    });

    await this.userRepository.save(user);
    return user;
  }
}

export { CreateUserServices };