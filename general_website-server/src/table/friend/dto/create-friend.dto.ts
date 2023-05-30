import { IsNumber } from 'class-validator';

export class CreateFriendDto {
  @IsNumber()
  sender_id: number;

  @IsNumber()
  reciever_id: number;

  @IsNumber()
  status: number;
}
