import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { ConsultService } from './consult.service';
import { CreateConsultDto } from './dto/create-consult.dto';
import { NoticeService } from '../notice/notice.service';
import { ForecastService } from '../forecast/forecast-service';

@Controller('news')
export class ConsultController {
  constructor(
    private readonly consultService: ConsultService,
    private readonly noticeService: NoticeService,
    private readonly forecastService: ForecastService,
  ) {}

  @Post('create')
  async create(@Body() createNewsDto: CreateConsultDto) {
    try {
      const consult = await this.consultService.create(
        createNewsDto.title,
        createNewsDto.background,
      );
      return consult;
    } catch (error) {
      throw new InternalServerErrorException(error.msg);
    }
  }

  @Get('list')
  async list() {
    try {
      const params = {};
      const consult = await this.consultService.list();
      const forecast = await this.forecastService.getList();
      const notice = await this.noticeService.findAll(
        { page: 1, size: 5 },
        params,
        'view',
      );
      return {
        news: consult[0],
        hotList: notice,
        forecast: forecast[0],
      };
    } catch (error) {
      throw new InternalServerErrorException(error.msg);
    }
  }
}
