import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { NoticeService } from './notice.service';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';

@Controller('notice')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

  @Get('list')
  async get(@Query() createNoticeDto: CreateNoticeDto, @Req() req) {
    const { size, page, info } = createNoticeDto;
    console.log(req.query);
    try {
      const total = await this.noticeService.total(info);
      const notice = await this.noticeService.findAll({ page, size }, info);
      return {
        notice,
        total: total.length,
      };
    } catch (error) {
      throw new InternalServerErrorException(error.msg);
    }
  }

  @Put('update')
  async update(@Body() createNoticeDto: UpdateNoticeDto) {
    try {
      const notice = await this.noticeService.update(createNoticeDto);
      return notice;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Post('add')
  async create(@Body() createNoticeDto: CreateNoticeDto) {
    try {
      const notice = await this.noticeService.create(
        createNoticeDto.info.title,
        createNoticeDto.info.type,
        createNoticeDto.info.content,
      );
      return notice;
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }
}
