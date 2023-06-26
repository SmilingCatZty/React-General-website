import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateFriendDto } from './dto/create-friend.dto';
import { FriendService } from './friend.service';
import { UserService } from '../user/user.service';
import { ChatService } from '../chat/chat.service';

type FriendInfo = {
  account_id: number;
  account_name: string;
  account_avatar: string;
  account_login_time: number;
};

@Controller('friend')
export class FrinedController {
  constructor(
    private readonly friendService: FriendService,
    private readonly userService: UserService,
    private readonly chatService: ChatService,
  ) {}

  @Post('create')
  async create(@Body() createFriendDto: CreateFriendDto) {
    const friend = await this.friendService.create({
      person_id: createFriendDto.person_id,
    });
    return friend;
  }

  // 获取好友信息列表
  @Get('list/:id')
  async getList(@Param() req) {
    const { id } = req;
    const friendInfoList = [];
    const person_id = Number(id);
    const {
      friend_list,
      friend_accept_list,
      friend_apply_list,
      friend_reject_list,
    } = await this.friendService.getList({ person_id }); // [1000,10001]
    await Promise.all(
      friend_list.map(async (item) => {
        const user = await this.userService.findOneByUserId(item);
        const chat = await this.chatService.getChatMsg({
          sender_id: id,
          reciever_id: item,
        });
        const noReadCount = chat.filter((item) => item.status === 0).length;
        friendInfoList.push({
          account_id: user.account_id,
          account_name: user.account_name,
          account_avatar: user.account_avatar,
          account_login_time: user.account_login_time,
          messageInfo: chat,
          noReadCount: noReadCount,
        });
      }),
    );

    return {
      friend_list: friendInfoList,
      friend_apply_list,
      friend_accept_list,
      friend_reject_list,
    };
  }
}
