import { InjectModel } from '@nestjs/mongoose';
import { ForecastDocument, Forecast } from './schema/forecast.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { ClearUselessPropertie } from '../../decretors/global.dec';

@Injectable()
export class ForecastService {
  constructor(
    @InjectModel('Forecast')
    private ForecastModel: Model<ForecastDocument>,
  ) {}

  async create(
    title: string,
    content: string,
    img: string,
    startTime: number,
  ): Promise<Forecast> {
    const forecast = await this.ForecastModel.create({
      title,
      content,
      img,
      startTime,
    });
    return forecast.save();
  }

  @ClearUselessPropertie
  async getList(): Promise<Forecast[]> {
    return this.ForecastModel.find();
  }

  async update({ _id }, params): Promise<Forecast> {
    const forecast = this.ForecastModel.findByIdAndUpdate(_id, params);
    return forecast;
  }
}
