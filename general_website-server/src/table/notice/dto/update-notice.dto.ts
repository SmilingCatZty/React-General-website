import { IsOptional, IsString } from 'class-validator';

export class UpdateNoticeDto {
  @IsString()
  _id: string;

  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  type: string;

  @IsString()
  @IsOptional()
  content: string;
}
