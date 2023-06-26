import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { WsGateWay } from './socket-ws/ws.gateway'; // socket-ws
import { SocketIoModule } from './socket-io/socket-io.module';

import { ExampleModule } from './Example/example.module';
import { NoticeModule } from './table/notice/notice.modules';
import { NewsModule } from './table/news/news.module';
import { ForecastModule } from './table/forecast/forecast.module';
import { HomeModule } from './table/home/home-module';
import { HomeAreaModule } from './table/homeArea/homeArea-module';
import { UserModule } from './table/user/user.module';
import { FriendModule } from './table/friend/friend.module';
import { ChatModule } from './table/chat/chat.moudle';
import { BlogModule } from './table/blog/blog.module';

@Module({
  // 导入模块
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/general-website'),
    SocketIoModule,
    // MongooseModule.forRootAsync({
    //   imports: [MongooseModule.forRoot('mongodb://general_website:27017')],
    // }),
    ExampleModule,
    NoticeModule,
    NewsModule,
    ForecastModule,
    HomeModule,
    HomeAreaModule,
    UserModule,
    FriendModule,
    ChatModule,
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
