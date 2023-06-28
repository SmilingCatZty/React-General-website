import { Module } from '@nestjs/common';
import { CommonController } from './common.controller';

@Module({
  imports: [],
  controllers: [CommonController],
  providers: [],
  exports: [],
})
export class CommonModule {}
