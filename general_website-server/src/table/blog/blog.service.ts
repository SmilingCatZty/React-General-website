import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog, BlogDocument } from './schema/blog.schema';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel('Blog')
    private blogModel: Model<BlogDocument>,
  ) {}

  async create(blogInfo: Blog): Promise<Blog> {
    const blog = new this.blogModel({
      ...blogInfo,
    });
    return blog.save();
  }

  /**
   * 查询全部博客
   * @param {number} page
   * @param {number} size
   * @param {string} status 日志状态
   */
  async findBlogList(
    page: number,
    size: number,
    status?: string,
  ): Promise<Blog[]> {
    const blogList = this.blogModel
      .find(status ? { blog_status: status } : null)
      .sort({ blog_create_time: -1 })
      .skip(size * (page - 1))
      .limit(size)
      .exec();
    return blogList;
  }

  /**
   * 查询当前用户id下所发博客列表
   * @param {number} blog_user_id 日志作者id
   */
  async findBlogByUserId(blog_user_id: number): Promise<Blog[]> {
    const blogList = this.blogModel
      .find({ blog_user_id })
      .sort({ blog_create_time: -1 })
      .lean();
    return blogList;
  }

  /**
   * 根据日志id查找
   * @param {string} blog_id 日志id
   */
  async findOneByBlogId(blog_id: string): Promise<BlogDocument> {
    return this.blogModel.findOne({ blog_id }, { _id: 0, blog_status: 0 });
  }

  /**
   * 查看热帖
   * @param {number} size
   * @param {number} page
   */
  async findAllByHotView(page: number, size: number): Promise<Blog[]> {
    return this.blogModel
      .find({ blog_status: 'pass' }, { blog_title: 1, blog_id: 1 })
      .sort({ 'blog_like_list.length': -1 })
      .skip(size * (page - 1))
      .limit(size)
      .exec();
  }

  /**
   * 更新点赞状态
   * @param {string} blog_id 日志id
   * @param {number} blog_user_id 日志作者id
   * @param {boolean} like_status 当前用户点赞状态
   */
  async updateBlogLikeStatus(
    blog_id: string,
    blog_user_id: number,
    like_status: boolean,
  ): Promise<Blog> {
    if (!like_status) {
      const blog = this.blogModel.findOneAndUpdate(
        { blog_id },
        { $push: { blog_like_list: blog_user_id } },
        { new: true },
      );
      return blog;
    } else {
      const blog = this.blogModel.findOneAndUpdate(
        { blog_id },
        { $pull: { blog_like_list: blog_user_id } },
      );
      return blog;
    }
  }
}
