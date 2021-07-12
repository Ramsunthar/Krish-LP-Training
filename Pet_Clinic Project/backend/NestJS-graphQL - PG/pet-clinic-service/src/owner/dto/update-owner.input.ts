import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateOwnerInput {
  @Field()
  id: string;
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field()
  city: string;
  @Field(() => Int)
  contactNo: number;
}
