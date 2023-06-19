import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Friend, FriendSchema } from './schema/frined.schema';
import { FrinedController } from './friend.controller';
import { FriendService } from './friend.service';
import { UserModule } from '../user/user.module';
import { ChatModule } from '../chat/chat.moudle';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Friend.name,
        schema: FriendSchema,
      },
    ]),
    UserModule,
    ChatModule,
  ],
  controllers: [FrinedController],
  providers: [FriendService],
  exports: [FriendService],
})
export class FriendModule {}
