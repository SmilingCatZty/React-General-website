import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { GetBlogDto, GetBlogInfoDto } from './dto/get-blog.dto';
import { LikeBlogDto } from './dto/like-blog.dto';
import { Blog, BlogDocument, BlogStatus } from './schema/blog.schema';
import { UserService } from '../user/user.service';
import { ClearUselessPropertie } from 'src/decretors/global.dec';

@Controller('blog')
export class BlogController {
  constructor(
    private readonly blogService: BlogService,
    private readonly userService: UserService,
  ) {}

  @Post('create')
  async create(@Body() createBlogDto: CreateBlogDto) {
    const blogList = await this.blogService.findBlogByUserId(
      createBlogDto.blog_user_id,
    );
    const newBlogId = blogList.length ? blogList.length + 1 : 1;
    const blogParams: Blog = {
      ...createBlogDto,
      blog_id: createBlogDto.blog_user_id + '#' + newBlogId,
      blog_status: BlogStatus.PASS,
      blog_comment_list: [],
      blog_like_list: [],
    };
    const blog = this.blogService.create(blogParams);
    return blog;
  }

  // 获取全部博客列表
  @Get('list')
  @ClearUselessPropertie
  async getList(@Query() queryParams: GetBlogDto) {
    const { page, size, status } = queryParams;
    let blog_status = '';
    if (status !== '') {
      blog_status = status;
    }
    const blogs = await this.blogService.findBlogList(page, size, blog_status);
    const total = await this.blogService.findBlogTotal(status);
    // const blogList = await Promise.all(
    //   blogs.map(async (item: BlogDocument) => {
    //     const { account_avatar } = await this.userService.findOneByUserId(
    //       item.blog_user_id,
    //     );
    //     const blog = item.toObject(); // 转换为普通对象
    //     return { ...blog, blog_avatar: account_avatar };
    //   }),
    // );
    return { blogs, total };
  }

  @Get('info')
  async getBlogInfo(@Query() queryParam: GetBlogInfoDto) {
    const { id } = queryParam;
    const blog: BlogDocument = await this.blogService.findOneByBlogId(id);
    const blogInfo = blog.toObject();
    const { account_avatar, account_name } =
      await this.userService.findOneByUserId(blog.blog_user_id);
    return {
      ...blogInfo,
      blog_avatar: account_avatar,
      blog_user_name: account_name,
    };
  }

  // 获取白名单博客列表
  @Get('passList')
  async getBlogList(@Query() queryParams: GetBlogDto) {
    const { page, size } = queryParams;
    const blogs = await this.blogService.findBlogList(
      page,
      size,
      BlogStatus.PASS,
    );
    const blogList = await Promise.all(
      blogs.map(async (item: BlogDocument) => {
        const { account_avatar, account_name } =
          await this.userService.findOneByUserId(item.blog_user_id);
        const blog = item.toObject(); // 转换为普通对象
        delete blog.blog_status;
        return {
          ...blog,
          blog_avatar: account_avatar,
          blog_user_name: account_name,
        };
      }),
    );
    return blogList;
  }

  // 获取热点资讯
  @Get('postList')
  async getHotConsultList() {
    const page = 1;
    const size = 5;
    try {
      const notice = await this.blogService.findAllByHotView(page, size);
      return notice;
    } catch (error) {
      throw new InternalServerErrorException(error.msg);
    }
  }

  @Put('like')
  async like(@Body() likeBlogDto: LikeBlogDto) {
    const { blog_id, blog_user_id } = likeBlogDto;
    let like_status = false;
    try {
      const blogInfo = await this.blogService.findOneByBlogId(blog_id);
      if (blogInfo.blog_like_list.includes(blog_user_id)) {
        like_status = true;
      }
      const blog = await this.blogService.updateBlogLikeStatus(
        blog_id,
        blog_user_id,
        like_status,
      );
      if (blog) {
        return true;
      }
    } catch (error) {
      throw new InternalServerErrorException(error.msg);
    }
  }
}
