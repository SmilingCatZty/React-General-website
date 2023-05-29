import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Friend, FriendSchema } from './schema/frined.schema';
import { FrinedController } from './friend.controller';
import { FriendService } from './friend.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Friend.name,
        schema: FriendSchema,
      },
    ]),
  ],
  controllers: [FrinedController],
  providers: [FriendService],
  exports: [FriendService],
})
export class FriendModule {}
