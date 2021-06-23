import { getCustomRepository, Repository } from 'typeorm';

import { Tag } from '../entities/Tag';
import { AppError } from '../errors/AppError';
import { TagRepository } from '../repositories/TagRepository';

class CreateTagServices {
  private tagRepository: Repository<Tag>;

  constructor() {
    this.tagRepository = getCustomRepository(TagRepository);
  }

  async execute(name: string): Promise<Tag> {
    if (!name) throw new AppError({
      status: 400,
      message: 'Incorrect name'
    });

    const tagExist = await this.tagRepository.findOne({ name });

    if (tagExist) throw new AppError({
      status: 409,
      message: 'Tag Already Exists'
    });

    const tag = this.tagRepository.create({ name });
    await this.tagRepository.save(tag);

    return tag;
  }
}

export { CreateTagServices };