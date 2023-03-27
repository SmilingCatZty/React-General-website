import { IsString } from 'class-validator';

export class CreateNoticeDto {
  @IsString()
  title: string;

  @IsString()
  type: string;
}
