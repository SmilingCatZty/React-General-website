import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { NewsDocument, News } from './schema/news.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class NewsService {
  constructor(
    @InjectModel('News')
    private newsModel: Model<NewsDocument>,
  ) {}

  async create(title: string, background: string): Promise<News> {
    const createNews = new this.newsModel({
      title,
      background,
    });
    return createNews.save();
  }

  async list(): Promise<News[]> {
    const news = this.newsModel.find();
    return news;
  }
}
