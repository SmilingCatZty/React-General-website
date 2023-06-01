import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateFriendDto } from './dto/create-friend.dto';
import { FriendService } from './friend.service';

@Controller('friend')
export class FrinedController {
  constructor(private readonly friendService: FriendService) {}

  @Post('create')
  async create(@Body() createFriendDto: CreateFriendDto) {
    const friend = await this.friendService.create(
      createFriendDto.sender_id,
      createFriendDto.reciever_id,
      createFriendDto.status,
    );
    return friend;
  }

  @Get('list/:id')
  async getList(@Param() req) {
    const { id } = req;
    const sender_id = Number(id);
    const friend = this.friendService.getList(sender_id);

    return friend;
  }
}
