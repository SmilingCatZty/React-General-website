import { IsNumber, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  comment_blog_id: string; // 评论博客id

  @IsNumber()
  comment_user_id: number; // 评论者id

  @IsString()
  comment_content: string; // 评论内容

  @IsNumber()
  comment_sender_id: number; // 被评论者id

  @IsNumber()
  comment_create_time: number; // 评论时间
}
