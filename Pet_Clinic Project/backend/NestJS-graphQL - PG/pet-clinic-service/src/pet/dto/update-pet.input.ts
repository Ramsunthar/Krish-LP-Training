import { CreatePetInput } from './create-pet.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePetInput {
  @Field()
   id: string
   @Field()
   name : string
   @Field()
   color : string
   @Field(()=> Int)
   age : number
   @Field()
   ownerId : string
}
