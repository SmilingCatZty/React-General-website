import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class GetBlogDto {
  @IsNumber()
  @Type(() => Number)
  page: number;

  @IsNumber()
  @Type(() => Number)
  size: number;
}
