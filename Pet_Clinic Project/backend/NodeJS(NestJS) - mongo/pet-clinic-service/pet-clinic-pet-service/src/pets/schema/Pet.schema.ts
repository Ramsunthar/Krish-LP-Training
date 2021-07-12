import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose } from 'mongoose';

export type PetDocument = Pet & Document;

@Schema()
export class Pet {
  @Prop()
  id: string
  @Prop()
  petName: string
  @Prop()
  furColor: string
  // @Prop({type: mongoose.Schema.Types.ObjectId, ref : 'Owner'})
  // ownerId: Owner
}

export const PetSchema = SchemaFactory.createForClass(Pet);