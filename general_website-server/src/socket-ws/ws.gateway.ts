import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { IsNumber, IsString } from 'class-validator';
import { Server, Socket } from 'socket.io';

// 此处和 chat 模块保持一致
class CreateChatDto {
  @IsNumber()
  sender_id: number; // 发送者id

  @IsNumber()
  reciever_id: number; // 接收者id

  @IsString()
  message: string; // 信息

  @IsNumber()
  status: number; // 状态

  @IsNumber()
  send_time: number; // 发送时间

  @IsString()
  signal: string;
}

@WebSocketGateway(3002)
export class WsGateWay implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  async handleConnection(@ConnectedSocket() client: Socket) {
    // 处理连接事件
    console.log('socket开始链接');
    // await client.join('dsadas');
  }

  async handleDisconnect() {
    // 处理断开连接事件
    console.log('socket断开链接');
  }

  @SubscribeMessage('friend')
  chatForOne(
    @MessageBody() data: CreateChatDto,
    @ConnectedSocket() client: Socket,
  ): void {
    console.log('开启一对一聊天', data);

    const { signal, message } = data;
    // const roomId = signal;
    // client.join(roomId);
    client.send(JSON.stringify({ data: message }));
    // this.server.to(roomId).emit('message', message);
    // 处理聊天消息
    // return {
    //   event: 'hello',
    //   data: message,
    //   msg: 'rustfisher.com',
    // };
  }

  @SubscribeMessage('friend-group')
  chatForGroup(@MessageBody() data: any, @ConnectedSocket() client): any {
    console.log('开启群聊');
    client.send(JSON.stringify({ event: 'tmp', data: '这里是个临时信息' }));
    return { event: 'hello2', data: data };
  }

  @SubscribeMessage('chat')
  async onChat(client: Socket, data: string) {
    // 处理聊天消息
    this.server.emit('chat', data);
  }
  // @SubscribeMessage('join')
  // async onJoin(client: Socket, data: string) {
  //   // 处理加入房间事件
  //   client.join(data.roomId);
  // }
  // @SubscribeMessage('leave')
  // async onLeave(@MessageBody() client: Socket, data: string) {
  //   // 处理离开房间事件
  //   client.leave(data.roomId);
  // }
}
