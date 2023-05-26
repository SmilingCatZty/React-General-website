import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HomeArea, HomeAreaSchema } from './schema/homeArea.schema';
import { HomeAreaController } from './homeArea-controller';
import { HomeAreaService } from './homeArea-service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: HomeArea.name, schema: HomeAreaSchema },
    ]),
  ],
  controllers: [HomeAreaController],
  providers: [HomeAreaService],
  exports: [HomeAreaService],
})
export class HomeAreaModule {}
