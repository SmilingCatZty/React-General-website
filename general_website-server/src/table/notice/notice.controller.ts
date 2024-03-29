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
import { ListNoticeDto } from './dto/list-notice.dto';

@Controller('notice')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

  @Post('create')
  async create(@Body() createNoticeDto: CreateNoticeDto) {
    try {
      const notice = await this.noticeService.create(
        createNoticeDto.title,
        createNoticeDto.type,
        createNoticeDto.content,
        createNoticeDto.createTime,
      );
      return notice;
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  // 获取通知列表
  @Get('list')
  async get(@Query() listNoticeDto: ListNoticeDto, @Req() req) {
    const { size, page, info } = listNoticeDto;
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

  @Get('info')
  async getConsultInfo(@Query() params) {
    try {
      const news = await this.noticeService.getConsultInfoById(params.id);
      console.log('news', news);
      return news;
    } catch (error) {
      throw new InternalServerErrorException(error.msg);
    }
  }

  // 获取热点资讯
  @Get('consultList')
  async getHotConsultList() {
    const page = 1;
    const size = 5;
    try {
      const notice = await this.noticeService.findAllByHotView({ page, size });
      return notice;
    } catch (error) {
      throw new InternalServerErrorException(error.msg);
    }
  }

  // 更新通知
  @Put('update')
  async update(@Body() updateNoticeDto: UpdateNoticeDto) {
    try {
      const notice = await this.noticeService.update(updateNoticeDto);
      return notice;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
