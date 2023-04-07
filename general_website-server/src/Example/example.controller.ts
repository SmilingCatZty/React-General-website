/**
 * @controller文件
 * 用于处理结果响应
 */
import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  Put,
} from '@nestjs/common';
import { ExampleService } from './example.service';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}
  @Get('list')
  async getExample() {
    const page = 1;
    const size = 10;
    try {
      const example = await this.exampleService.findAll(page, size);
      return example;
    } catch (error) {
      throw new InternalServerErrorException(error.msg);
    }
  }

  @Put('update')
  async update(@Body() updateExampleDto: UpdateExampleDto) {
    try {
      const example = this.exampleService.update(updateExampleDto);
      return example;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Post('add')
  async create(@Body() createExampleDto: CreateExampleDto) {
    try {
      const example = await this.exampleService.create(
        createExampleDto.id,
        createExampleDto.auth,
      );
      return example;
    } catch (err) {
      /**
       * @InternalServerErrorException 内置HTTP异常
       */
      throw new InternalServerErrorException(err.message);
    }
  }
}
