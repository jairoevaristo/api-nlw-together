import { Repository, getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { User } from '../entities/User';
import { AppError } from '../errors/AppError';
import { UserRepository } from '../repositories/UserRepository';
import { IAutheticatedUserDTO } from '../dtos/AutheticatedUserDTO';

class AutheticatedUserServices {  
  private autheticatedUserRepository: Repository<User>;

  constructor() {
    this.autheticatedUserRepository = getCustomRepository(UserRepository);
  }

  async execute({ email, password }: IAutheticatedUserDTO): Promise<string> {
    const user = await this.autheticatedUserRepository.findOne({
      email 
    });

    if (!user) { 
        throw new AppError({
          message: 'Email/Password incorrect',
          status: 404
        });
      }

    const passwordHash = await compare(password, user.password);

    if (!passwordHash) {
      throw new AppError({
        message: 'Email/Password incorrect',
        status: 404
      });
    }

    const token = sign({
      email: user.email
    }, "7rhs34ue0y4795bcsxcnztw48r2", {
      subject: user.id,
      expiresIn: '1d'
    }); 

    return token;

  }

}

export { AutheticatedUserServices };