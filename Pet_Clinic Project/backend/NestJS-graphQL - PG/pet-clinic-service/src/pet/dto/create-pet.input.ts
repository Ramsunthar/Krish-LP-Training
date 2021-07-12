import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreatePetInput {
  @Field()
  name: string;
  @Field()
  color: string;
  @Field(() => Int)
  age: number;
  @Field()
  ownerId : string
}
