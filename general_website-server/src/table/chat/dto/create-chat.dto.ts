import { IsNumber, IsString } from 'class-validator';

export class CreateChatDto {
  @IsNumber()
  sender_id: number;

  @IsNumber()
  reciever_id: number;

  @IsString()
  message: string;

  @IsNumber()
  status: number;

  @IsNumber()
  send_time: number;
}
