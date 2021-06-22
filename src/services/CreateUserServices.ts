import { Repository } from 'typeorm';

import { ICreateUserDTO } from '../dtos/CreateUserDTO';
import { User } from '../entities/User';

class CreateUserServices {
  private userRepository: Repository<User>;

  constructor(userRepository: Repository<User>) {
    this.userRepository = userRepository;
  }

  async execute({ email, name, admin }: ICreateUserDTO) {

    if (!email) throw new Error('E-mail incorrect');

    const userExists = this.userRepository.findOne({ email });

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