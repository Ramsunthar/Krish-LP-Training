import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OwnerDocument = Owner & Document;

@Schema()
export class Owner {
  @Prop()
  id: string;
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop()
  address: string;
  @Prop()
  phoneNumber: number;
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);