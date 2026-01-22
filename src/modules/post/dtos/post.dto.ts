import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/abstract.dto.ts';
import type { PostEntity } from '../post.entity.ts';
import { IsString } from 'class-validator';

export class PostDto extends AbstractDto {
  @ApiPropertyOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional()
  description?: string;

  @ApiPropertyOptional()
  info: string;

  constructor(postEntity: PostEntity) {
    super(postEntity);
    this.info = 'keywords.admin';
  }
}
