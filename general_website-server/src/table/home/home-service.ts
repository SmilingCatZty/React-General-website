import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HomeDocument, Home } from './schema/home.schema';

@Injectable()
export class HomeService {
  constructor(
    @InjectModel('Home')
    private HomeModule: Model<HomeDocument>,
  ) {}

  async create(
    title: string,
    background: string,
    btnbtnBackground: string,
    qrCodeImg: string,
    pcImg: string,
    boardTitle: string,
    boardBackground: string,
  ): Promise<Home> {
    const home = await this.HomeModule.create({
      title,
      background,
      btnbtnBackground,
      qrCodeImg,
      pcImg,
      boardTitle,
      boardBackground,
    });
    return home.save();
  }

  async getList() {
    const home = await this.HomeModule.find();
    return home;
  }
}
