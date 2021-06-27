import { Repository, getCustomRepository } from 'typeorm';
import { Compliment } from '../entities/Compliment';
import { ComplimentsRepository } from '../repositories/ComplimentsRepository';

class ListUserSenderComplimentsServices {
  private complimentsRepository: Repository<Compliment>;

  constructor() {
    this.complimentsRepository = getCustomRepository(ComplimentsRepository);
  }

  async execute(user_id: string) {
    const compliments = await this.complimentsRepository.find({
      where: {
        user_sender: user_id
      }
    });
    return compliments;
  }
}

export { ListUserSenderComplimentsServices };