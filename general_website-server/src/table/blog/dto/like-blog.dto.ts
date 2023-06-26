import { IsNumber, IsString } from 'class-validator';

export class LikeBlogDto {
  @IsString()
  blog_id: string;

  @IsNumber()
  blog_user_id: number;

  // @IsBoolean()
  // like_status: boolean;
}
