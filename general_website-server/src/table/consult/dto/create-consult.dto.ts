import { IsString } from 'class-validator';

export class CreateConsultDto {
  @IsString()
  title: string;

  @IsString()
  background: string;
}
