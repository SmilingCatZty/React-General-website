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
    user_id: number,
    friend_id: number,
    status: number,
  ): Promise<Friend> {
    const friend = new this.friendModel({
      user_id,
      friend_id,
      status,
    });
    return friend.save();
  }
}
