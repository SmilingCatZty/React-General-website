import { IsString } from 'class-validator';

export class CreateNewsDto {
  @IsString()
  title: string;

  @IsString()
  background: string;
}
