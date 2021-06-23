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
      message: 'Icorrect name'
    });

    const tagAlreadyExist = this.tagRepository.findOne({ name });

    if (tagAlreadyExist) throw new AppError({
      status: 409,
      message: 'Tag Already Exists'
    });

    const tag = this.tagRepository.create({ name });
    await this.tagRepository.save(tag);

    return tag;
  }
}

export { CreateTagServices };