import { IsString } from 'class-validator';

export class CreateHomeAreaDto {
  @IsString()
  title: string;

  @IsString()
  img: string;
}
