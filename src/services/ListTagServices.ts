import { Repository, getCustomRepository } from 'typeorm';
import { classToPlain } from 'class-transformer';

import { Tag } from '../entities/Tag';
import { TagRepository } from '../repositories/TagRepository';

class ListTagServices {
  private listRepository: Repository<Tag>;

  constructor() {
    this.listRepository = getCustomRepository(TagRepository);
  }

  async execute() {
    const tags = await this.listRepository.find();
    return classToPlain(tags);
  }
}

export { ListTagServices };
