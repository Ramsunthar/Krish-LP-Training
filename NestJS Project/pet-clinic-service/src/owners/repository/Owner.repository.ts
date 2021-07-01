import { Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Owner, OwnerDocument } from 'src/owners/schema/Owner.schema';
import { OwnerCreateDto } from '../dto/OwnerCreate.dto';
import { OwnerUpdateDto } from '../dto/OwnerUpdate.dto';

@Injectable()
export class OwnerRepository {
  constructor(
    @InjectModel(Owner.name) private ownerModel: Model<OwnerDocument>,
  ) {}

  async create(createOwnerDTO: OwnerCreateDto): Promise<Owner> {
    let newOwner = new this.ownerModel(createOwnerDTO);
    return await newOwner.save();
  }

  async findAll(): Promise<Owner[]> {
    return await this.ownerModel.find();
  }

  async findById(id:string): Promise<Owner> {
    return await this.ownerModel.findById(id);
  }

  async update(id: string, updateOwnerDTO: OwnerUpdateDto): Promise<Owner> {
    console.log(updateOwnerDTO);
    console.log(id);
    return await this.ownerModel.findByIdAndUpdate(id, updateOwnerDTO);
  }

  async delete(id:string) : Promise<Owner> {
    return await this.ownerModel.findByIdAndDelete(id);
  }
}
