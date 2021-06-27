import { Repository, getCustomRepository } from 'typeorm';
import { ICreateComplimentsDTO } from '../dtos/CreateComplimentsDTO';
import { Compliment } from '../entities/Compliment';
import { User } from '../entities/User';
import { AppError } from '../errors/AppError';
import { ComplimentsRepository } from '../repositories/ComplimentsRepository';
import { UserRepository } from '../repositories/UserRepository';

class CreateComplimentsServices {
  private complimentsRepository: Repository<Compliment>;
  private userRepository: Repository<User>;

  constructor() {
    this.complimentsRepository = getCustomRepository(ComplimentsRepository);
    this.userRepository = getCustomRepository(UserRepository);
  }

  async execute({
    message,
    tag_id,
    user_receiver,
    user_sender
  }: ICreateComplimentsDTO): Promise<Compliment> {
    const userReceiverExists = await this.userRepository.findOne(user_receiver);

    if (user_sender === user_receiver) {
      throw new AppError({
        message: 'Incorrect user receiver',
        status: 400
      });
    }

    if (!userReceiverExists) {
      throw new AppError({
        message: 'User receiver does not exists!',
        status: 404
      });
    }

    const compliment = this.complimentsRepository.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    });

    await this.complimentsRepository.save(compliment);
    return compliment;
  }
}

export { CreateComplimentsServices };