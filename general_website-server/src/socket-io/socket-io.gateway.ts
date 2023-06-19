import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  ConnectedSocket,
} from '@nestjs/websockets';
import { SocketIoService } from './socket-io.service';
import { CreateSocketIoDto } from './dto/create-socket-io.dto';
import { Header } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

/** @WebSocketGateway装饰器可传入一些配置选项，如下面的示例：
 *   @WebSocketGateway(80, {
 *     namespace: 'events',
 *     transports: ['websocket']
 *     cors: {
 *        origin: '*'
 *     },
 *     ...
 *   })
 **/

@WebSocketGateway(8080)
export class SocketIoGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  constructor(private readonly socketIoService: SocketIoService) {}

  afterInit() {
    console.log('连接初始化');
  }

  handleConnection(client: Socket) {
    console.log(`开始连接`);
  }

  handleDisconnect() {
    console.log(`连接关闭`);
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: any, client: Socket) {
    console.log('消息进入', data);
  }

  // 1对1聊天
  @Header('Access-Control-Allow-Origin', '*')
  @SubscribeMessage('one')
  chatOne(
    @MessageBody() createSocketIoDto: CreateSocketIoDto,
    @ConnectedSocket() client: Socket,
  ) {
    const msg = this.socketIoService.chatWithOne(createSocketIoDto);
    client.emit('message', msg);
  }

  // 群聊
  @SubscribeMessage('group')
  chatMore(@MessageBody() createSocketIoDto: CreateSocketIoDto) {
    return this.socketIoService.chatForGroup(createSocketIoDto);
  }
}
