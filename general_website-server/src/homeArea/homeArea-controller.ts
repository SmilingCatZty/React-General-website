import { Controller, Post, Body } from '@nestjs/common';
import { HomeAreaService } from './homeArea-service';
import { CreateHomeAreaDto } from './dto/create-homeArea.dto';

//   }
@Controller('home-area')
export class HomeAreaController {
  constructor(private readonly homeAreaService: HomeAreaService) {}

  @Post('create')
  async create(@Body() createHomeAreaDto: CreateHomeAreaDto) {
    const homeArea = await this.homeAreaService.create(
      createHomeAreaDto.title,
      createHomeAreaDto.img,
    );
    return homeArea;
  }
}
