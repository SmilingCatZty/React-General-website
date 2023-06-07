import { IsObject, IsString } from 'class-validator';

type SocketMsgInfo = {
  sender_id: number;
  reciever_id: number;
  signal: string;
  message: string;
};

export class CreateSocketIoDto {
  @IsString()
  event: string;

  @IsObject()
  data: SocketMsgInfo;
}
