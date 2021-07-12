import { ObjectType, Field, Int } from '@nestjs/graphql';
import { collectComment } from 'graphql-tools';
import { Owner } from 'src/owner/entities/owner.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Pet {
  @Field()
  @PrimaryGeneratedColumn('uuid')
   id: string
   @Field()
   @Column()
   name : string
   @Field()
   @Column()
   color : string
   @Field(()=> Int)
   @Column()
   age : number
   @Field()
   @Column()
   ownerId : string

   @ManyToOne(()=>Owner, owner => owner.pets)
   @Field(()=>Owner)
   owner: Owner
}
