import { Type } from 'class-transformer';
import { IsNumber, IsObject } from 'class-validator';

type pageInfoObj = {
  title?: string;
  type?: string;
  content?: string;
  img?: string;
  createTime?: number;
};

export class ListNoticeDto {
  @IsObject()
  info: pageInfoObj;

  @IsNumber()
  @Type(() => Number)
  page = 1;

  @IsNumber()
  @Type(() => Number)
  size = 10;
}
