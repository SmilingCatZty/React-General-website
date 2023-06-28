import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class GetBlogDto {
  @IsNumber()
  @Type(() => Number)
  page: number;

  @IsNumber()
  @Type(() => Number)
  size: number;

  @IsString()
  @IsOptional()
  status: string;
}

export class GetBlogInfoDto {
  @IsString()
  id: string;
}
