import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { CreateForecastDto } from './dto/create-forecast.dto';
import { ForecastService } from './forecast-service';
import { UpdateExampleDto } from 'src/Example/dto/update-example.dto';

@Controller('forecast')
export class ForecastController {
  constructor(private readonly forecastService: ForecastService) {}

  @Post('add')
  async create(@Body() createForecastDto: CreateForecastDto) {
    const forecast = await this.forecastService.create(
      createForecastDto.title,
      createForecastDto.content,
      createForecastDto.img,
      createForecastDto.startTime,
    );
    return forecast;
  }

  @Put('update')
  async update(@Body() updateExampleDto: UpdateExampleDto) {
    const { _id, info } = { ...updateExampleDto };
    const forecast = await this.forecastService.update({ _id }, info);
    return forecast;
  }

  @Get('list')
  async getList() {
    const forecast = await this.forecastService.getList();
    return {
      info: forecast[0],
    };
    return {
      info: forecast[0],
    };
  }
}
