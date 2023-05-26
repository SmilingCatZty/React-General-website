import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HomeSchema, Home } from './schema/home.schema';
import { HomeService } from './home-service';
import { HomeController } from './home-controller';
import { HomeAreaModule } from '../homeArea/homeArea-module';
import { NoticeModule } from '../notice/notice.modules';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Home.name, schema: HomeSchema }]),
    HomeAreaModule,
    NoticeModule,
  ],
  controllers: [HomeController],
  providers: [HomeService],
  exports: [HomeService],
})
export class HomeModule {}
