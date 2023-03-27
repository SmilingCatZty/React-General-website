import {
  Body,
  Controller,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { NoticeService } from './notice.service';

@Controller('notice')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

  @Post()
  async create(@Body() createNoticeDto: CreateNoticeDto) {
    try {
      const notice = await this.noticeService.create(
        createNoticeDto.title,
        createNoticeDto.type,
      );
      return notice;
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }
}
