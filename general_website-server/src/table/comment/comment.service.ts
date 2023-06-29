import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CommentDocument, Comment } from './schema/comment.schema';
import { InjectModel } from '@nestjs/mongoose';

Injectable();
export class CommentService {
  constructor(
    @InjectModel('Comment')
    private commentModel: Model<CommentDocument>,
  ) {}

  async create(commentInfo: Comment): Promise<Comment> {
    const comment = new this.commentModel({
      ...commentInfo,
    });
    return comment.save();
  }

  /**
   * 查询全部评论
   */
  async findAll(): Promise<Comment[]> {
    return this.commentModel.find();
  }

  /**
   * 根据日志id查询该日志下的评论
   * @param {string} blog_id
   * @returns
   */
  async findByBlogId(blog_id: string): Promise<Comment[]> {
    const comment = this.commentModel
      .find({ comment_blog_id: blog_id })
      .sort({ comment_create_time: -1 })
      .exec();
    return comment;
  }
}
