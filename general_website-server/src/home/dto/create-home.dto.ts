import { IsString } from 'class-validator';

export class CreateHomeDto {
  @IsString()
  title: string;

  @IsString()
  background: string;

  @IsString()
  btnBackground: string;

  @IsString()
  qrCodeImg: string;

  @IsString()
  pcImg: string;

  @IsString()
  boardTitle: string;

  @IsString()
  boardBackground: string;
}
