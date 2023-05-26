import { IsNumber, IsString } from 'class-validator';

export class CreateForecastDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsString()
  img: string;

  @IsNumber()
  startTime: number;
}
