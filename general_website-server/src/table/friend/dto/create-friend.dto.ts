import { IsNumber } from 'class-validator';

export class CreateFriendDto {
  @IsNumber()
  person_id: number;
}
