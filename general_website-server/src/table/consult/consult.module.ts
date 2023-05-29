import { Module } from '@nestjs/common';
import { ConsultSchema, Consult } from './schema/consult.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsultController } from './consult.controller';
import { ConsultService } from './consult.service';
import { NoticeModule } from '../notice/notice.modules';
import { ForecastModule } from '../forecast/forecast.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Consult.name, schema: ConsultSchema }]),
    // forwardRef(() => NoticeModule),
    NoticeModule,
    ForecastModule,
  ],
  controllers: [ConsultController],
  providers: [ConsultService],
  exports: [ConsultService],
})
export class ConsultModule {}
