import { Module } from '@nestjs/common';
import { NewsSchema, News } from './schema/news.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { NoticeModule } from '../notice/notice.modules';
import { ForecastModule } from '../forecast/forecast.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: News.name, schema: NewsSchema }]),
    // forwardRef(() => NoticeModule),
    NoticeModule,
    ForecastModule,
  ],
  controllers: [NewsController],
  providers: [NewsService],
  exports: [NewsService],
})
export class NewsModule {}
