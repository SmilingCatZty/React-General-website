import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Notice, NoticeSchema } from './schema/notice.schema';
import { NoticeController } from './notice.controller';
import { NoticeService } from './notice.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Notice.name, schema: NoticeSchema }]),
  ],
  controllers: [NoticeController],
  providers: [NoticeService],
  exports: [NoticeService],
})
export class NoticeModule {}
