import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HomeAreaDocument, HomeArea } from './schema/homeArea.schema';

@Injectable()
export class HomeAreaService {
  constructor(
    @InjectModel('HomeArea')
    private HomeAreaModule: Model<HomeAreaDocument>,
  ) {}

  async create(title: string, img: string): Promise<HomeArea> {
    const homeArea = await this.HomeAreaModule.create({
      title,
      img,
    });
    return homeArea.save();
  }

  async getList(): Promise<HomeArea[]> {
    const homeArea = await this.HomeAreaModule.find();
    return homeArea;
  }
}
