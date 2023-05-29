import { Exclude } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class GetForecastDto {
  constructor(partial: Partial<GetForecastDto>) {
    Object.assign(this, partial);
  }
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsString()
  img: string;

  @IsNumber()
  startTime: number;

  @Exclude()
  @IsOptional()
  _id: string;

  @Exclude()
  @IsOptional()
  __v: string;
}
