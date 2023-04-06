import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ExampleModule } from './Example/example.module';
import { NoticeModule } from './notice/notice.modules';

@Module({
  // 导入模块
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/general-website'),

    // MongooseModule.forRootAsync({
    //   imports: [MongooseModule.forRoot('mongodb://general_website:27017')],
    // }),
    ExampleModule,
    NoticeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}