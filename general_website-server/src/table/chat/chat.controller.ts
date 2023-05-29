import { Body, Controller, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('create')
  async create(
    @Body()
    createChatDto: CreateChatDto,
  ) {
    try {
      const chat = this.chatService.create({
        ...createChatDto,
      });
      return chat;
    } catch (error) {
      console.log(error);
    }
  }
}
