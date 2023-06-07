import { Injectable } from '@nestjs/common';
import { CreateSocketIoDto } from './dto/create-socket-io.dto';

@Injectable()
export class SocketIoService {
  // 1对1聊天
  chatWithOne(createSocketIoDto: CreateSocketIoDto) {
    console.log('开始1对1聊天', createSocketIoDto.data);
    return 'This action adds a new socketIo';
  }

  // 群聊
  chatForGroup(createSocketIoDto: CreateSocketIoDto) {
    console.log('开始群聊', createSocketIoDto.data);
    return `This action returns all socketIo`;
  }
}
