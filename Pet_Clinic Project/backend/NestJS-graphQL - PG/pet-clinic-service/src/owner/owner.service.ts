import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnerService {


  constructor(@InjectRepository(Owner) private ownerRepository : Repository<Owner>) {}

  async create(owner: CreateOwnerInput): Promise <Owner> {
    let data = this.ownerRepository.create(owner);
    return this.ownerRepository.save(data);
  }

  async findAll(): Promise<Owner[]> {
    return this.ownerRepository.find({
      relations: ['pets']
    });
  }

  async findOne(id: string): Promise<Owner> {
    return this.ownerRepository.findOne(id, {
      relations: ['pets']
    });
  }

  async update(id: string, updateOwnerInput: UpdateOwnerInput) {
    let data:Owner = this.ownerRepository.create(updateOwnerInput);
    data.id = id;
    return this.ownerRepository.save(data);
  }

  async remove(id: string) {
    let owner = this.findOne(id);
    if(owner) {
      let data = await this.ownerRepository.delete(id);
      if (data.affected === 1) {
        return owner;
      }
    }
    throw new NotFoundException(`Record cannot find by id ${id}`);
  }
}
