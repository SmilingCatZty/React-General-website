import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ForecastSchema, Forecast } from './schema/forecast.schema';
import { ForecastController } from './forecast-controller';
import { ForecastService } from './forecast-service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Forecast.name,
        schema: ForecastSchema,
      },
    ]),
  ],
  controllers: [ForecastController],
  providers: [ForecastService],
  exports: [ForecastService],
})
export class ForecastModule {}
