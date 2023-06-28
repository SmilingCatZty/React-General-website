import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class GetBlogDto {
  @IsNumber()
  @Type(() => Number)
  page: number;

  @IsNumber()
  @Type(() => Number)
  size: number;
}

export class GetBlogInfoDto {
  @IsString()
  id: string;
}
