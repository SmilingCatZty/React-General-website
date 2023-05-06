import { Body, Controller, Get, Post } from '@nestjs/common';
import { HomeService } from './home-service';
import { HomeAreaService } from '../homeArea/homeArea-service';
import { NoticeService } from '../notice/notice.service';
import { CreateHomeDto } from './dto/create-home.dto';

@Controller('home')
export class HomeController {
  constructor(
    private readonly homeService: HomeService,
    private readonly homeAreaService: HomeAreaService,
    private readonly noticeService: NoticeService,
  ) {}

  @Post('create')
  async create(@Body() createHomeDto: CreateHomeDto) {
    const home = await this.homeService.create(
      createHomeDto.title,
      createHomeDto.background,
      createHomeDto.btnBackground,
      createHomeDto.qrCodeImg,
      createHomeDto.pcImg,
      createHomeDto.boardTitle,
      createHomeDto.boardBackground,
    );
    return home;
  }

  @Get('list')
  async list() {
    const params = {};
    const noticeTypes = ['news', 'active', 'other', 'notice'];
    noticeTypes.map(async (item: any) => {
      params[item + 'List'] = await this.noticeService.findAll(
        { page: 1, size: 5 },
        { type: item },
      );
    });
    const home = await this.homeService.getList();
    const homeArea = await this.homeAreaService.getList();
    const result = {
      homeInfo: home[0],
      areaList: homeArea,
      boardInfo: params,
    };
    return {
      ...result,
    };
  }
}
