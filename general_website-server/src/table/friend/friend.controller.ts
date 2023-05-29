import { Body, Controller, Post } from '@nestjs/common';
import { CreateFriendDto } from './dto/create-friend.dto';
import { FriendService } from './friend.service';

@Controller('friend')
export class FrinedController {
  constructor(private readonly friendService: FriendService) {}

  @Post('create')
  async create(@Body() createFriendDto: CreateFriendDto) {
    const friend = await this.friendService.create(
      createFriendDto.user_id,
      createFriendDto.friend_id,
      createFriendDto.status,
    );
    return friend;
  }
}
