import { Injectable } from '@nestjs/common';
import { Friend, FriendDocument } from './schema/frined.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

Injectable();
export class FriendService {
  constructor(
    @InjectModel('Friend') private friendModel: Model<FriendDocument>,
  ) {}

  async create({ person_id }): Promise<Friend> {
    const friend = new this.friendModel({
      person_id,
      friend_list: [],
      friend_apply_list: [],
      friend_accept_list: [],
      friend_reject_list: [],
    });
    return friend.save();
  }

  async getList({ person_id }): Promise<Friend> {
    const friend = await this.friendModel.findOne({ person_id });
    return friend;
  }
}
