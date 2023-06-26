import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateBlogDto {
  @IsNumber()
  blog_user_id: number; // 作者id

  @IsString()
  blog_title: string; // 博客标题

  @IsString()
  blog_content: string; // 博客内容

  @IsArray()
  blog_img: string[]; // 博客图片

  @IsNumber()
  blog_create_time: number; // 创建时间
}
