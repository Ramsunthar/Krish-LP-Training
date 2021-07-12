import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Pet } from 'src/pet/entities/pet.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Owner {
 @Field()
 @PrimaryGeneratedColumn('uuid')
  id: string
 @Field()
 @Column()
 firstName: string
 @Field()
 @Column()
 lastName: string
 @Field()
 @Column()
 city: string
 @Field(() => Int)
 @Column()
 contactNo: number

 @OneToMany(()=> Pet, pet=>pet.owner)
 @Field(()=>[Pet], {nullable:true})
 pets: Pet[]
}
