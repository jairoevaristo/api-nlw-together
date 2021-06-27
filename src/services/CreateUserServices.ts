import { getCustomRepository, Repository } from 'typeorm';
import { hash } from 'bcryptjs';

import { ICreateUserDTO } from '../dtos/CreateUserDTO';
import { User } from '../entities/User';
import { AppError } from '../errors/AppError';
import { UserRepository } from '../repositories/UserRepository';
class CreateUserServices {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
  }

  async execute({ email, name, admin = false, password }: ICreateUserDTO): Promise<User> {

    if (!email) throw new AppError({
      status: 400, 
      message: 'E-mail incorrect' 
    });

    const userExists = await this.userRepository.findOne({ email });

    if (userExists) throw new AppError({
      status: 409,
      message: 'User already exists'
    });

    const passwordHash = await hash(password, 16);

    const user = this.userRepository.create({
      name,
      email,
      admin,
      password: passwordHash
    });

    await this.userRepository.save(user);
    return user;
  }
}

export { CreateUserServices };