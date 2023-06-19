import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatDocument, Chat } from './schama/chat.schema';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel('Chat')
    private chatModel: Model<ChatDocument>,
  ) {}

  async create(chatInfo): Promise<Chat> {
    const chat = new this.chatModel({
      ...chatInfo,
      // sender_id: 0,
      // reciever_id: 0,
      // message: '',
      // status: 0,
      // send_time: 0,
    });
    return chat.save();
  }

  // 获取聊天信息
  async getChatMsg({ sender_id, reciever_id }): Promise<Chat[]> {
    const chat = this.chatModel.find({
      $or: [
        { sender_id, reciever_id },
        { sender_id: reciever_id, reciever_id: sender_id },
      ],
    });
    return chat;
  }
}
