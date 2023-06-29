import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentDocument } from './schema/comment.schema';
import { CommentService } from './comment.service';
import { UserService } from '../user/user.service';

@Controller('comment')
export class CommentController {
  constructor(
    private readonly commentService: CommentService,
    private readonly userService: UserService,
  ) {}

  @Post('create')
  async create(@Body() createCommentDto: CreateCommentDto) {
    const comment = this.commentService.create(createCommentDto);
    return comment;
  }

  // 发表评论
  @Post('publish')
  async publishComment(@Body() createCommentDto: CreateCommentDto) {
    const comment = await this.commentService.create(createCommentDto);
    return comment;
  }

  // 获取评论列表
  @Get('list')
  async getListByBlogId(@Query() queryParams: { blog_id: string }) {
    const comments = await this.commentService.findByBlogId(
      queryParams.blog_id,
    );
    const commentList = await Promise.all(
      comments.map(async (item: CommentDocument) => {
        const { account_avatar, account_name } =
          await this.userService.findOneByUserId(item.comment_user_id);
        const comment = item.toObject();
        return {
          ...comment,
          comment_user_avatar: account_avatar,
          comment_user_name: account_name,
        };
      }),
    );
    return commentList;
  }
}
