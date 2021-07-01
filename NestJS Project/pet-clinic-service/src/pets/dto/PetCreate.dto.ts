import { IsNotEmpty } from "class-validator";

export class PetCreateDto {
  petId: string;
  @IsNotEmpty()
  petName: string;
  furColor: string;

}
