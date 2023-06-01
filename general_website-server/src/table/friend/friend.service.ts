import { Injectable } from '@nestjs/common';
import { Friend, FriendDocument } from './schema/frined.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

Injectable();
export class FriendService {
  constructor(
    @InjectModel('Friend') private friendModel: Model<FriendDocument>,
  ) {}

  async create(
    sender_id: number,
    reciever_id: number,
    status: number,
  ): Promise<Friend> {
    const friend = new this.friendModel({
      sender_id,
      reciever_id,
      status,
      friend_signal: sender_id + '#' + reciever_id,
    });
    return friend.save();
  }

  async getList(sender_id: number): Promise<Friend[]> {
    const friend = this.friendModel.find({ sender_id });
    return friend;
  }
}
