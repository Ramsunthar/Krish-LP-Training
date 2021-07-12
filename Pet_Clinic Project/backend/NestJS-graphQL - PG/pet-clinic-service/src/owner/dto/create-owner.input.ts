import { InputType,  Field, Int } from '@nestjs/graphql';


@InputType()
export class CreateOwnerInput {
  @Field()
  firstName: string
  @Field()
  lastName: string
  @Field()
  city: string
  @Field(() => Int)
  contactNo: number
}
