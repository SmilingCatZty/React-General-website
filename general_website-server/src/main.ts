import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { WsAdapter } from '@nestjs/platform-ws';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // nestJs使用 'ws' 库创建webscoket
  // app.useWebSocketAdapter(new WsAdapter(app));

  // const corsOptions: CorsOptions = {
  //   origin: 'http://localhost:800',
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   preflightContinue: false,
  //   optionsSuccessStatus: 204,
  //   credentials: true,
  // };
  // 启用cors
  app.enableCors();

  // nestJs使用 'socket.io' 使用websocket
  const httpAdapter = app.getHttpAdapter();
  app.useWebSocketAdapter(new IoAdapter(httpAdapter));

  /**
   * @ValidationPipe
   * ValidationPipe 使用了功能强大的 class-validator 包及其声明性验证装饰器。
   * ValidationPipe 提供了一种对所有传入的客户端有效负载强制执行验证规则的便捷方法，其中在每个模块的本地类或者 DTO 声明中使用简单的注释声明特定的规则
   */
  app.useGlobalPipes(new ValidationPipe());

  // 设置路由前缀 ： exclude用于排除路由
  app.setGlobalPrefix('smilling-cat', { exclude: ['view'] });
  // 监听端口
  await app.listen(5000);
}
bootstrap();
