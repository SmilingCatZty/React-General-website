import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { NoticeService } from '../notice/notice.service';

@Controller('news')
export class NewsController {
  constructor(
    private readonly newsService: NewsService,
    private readonly noticeService: NoticeService,
  ) {}

  @Post('create')
  async create(@Body() createNewsDto: CreateNewsDto) {
    try {
      const news = await this.newsService.create(
        createNewsDto.title,
        createNewsDto.background,
      );
      return news;
    } catch (error) {
      throw new InternalServerErrorException(error.msg);
    }
  }

  @Get('list')
  async list() {
    try {
      const params = {};
      const news = await this.newsService.list();
      const notice = await this.noticeService.findAll(
        { page: 1, size: 5 },
        params,
        'view',
      );
      console.log('news', news);
      console.log('notice', notice);
      return {
        news: news[0],
        hotList: notice,
      };
    } catch (error) {
      throw new InternalServerErrorException(error.msg);
    }
  }
}
