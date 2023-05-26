import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateNoticeDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  type: string;

  @IsString()
  @IsOptional()
  content: string;

  @IsString()
  @IsOptional()
  img: string;

  @IsNumber()
  createTime: number;
}
