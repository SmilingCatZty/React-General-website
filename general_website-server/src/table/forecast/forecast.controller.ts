import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { CreateForecastDto } from './dto/create-forecast.dto';
import { ForecastService } from './forecast.service';
import { UpdateForecastDto } from 'src/table/forecast/dto/update-forecast.dto';

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
  async update(@Body() updateForecastDto: UpdateForecastDto) {
    const { _id, info } = { ...updateForecastDto };
    const forecast = await this.forecastService.update({ _id }, info);
    return forecast;
  }

  @Get('list')
  async getList() {
    try {
      const forecast = await this.forecastService.getList();
      return {
        info: forecast,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
