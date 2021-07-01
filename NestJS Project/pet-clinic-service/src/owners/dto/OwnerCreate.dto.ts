import { IsNotEmpty } from "class-validator";

export class OwnerCreateDto {
  ownerId: string;
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  Address: string;
  phoneNumber: number;
}
