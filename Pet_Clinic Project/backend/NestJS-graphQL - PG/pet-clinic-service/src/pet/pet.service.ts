import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from 'src/owner/entities/owner.entity';
import { OwnerService } from 'src/owner/owner.service';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetService {

  constructor(@InjectRepository(Pet) private petRepository : Repository<Pet>,
  private ownerService: OwnerService) {}

  async create(pet: CreatePetInput): Promise<Pet> {
    let data = this.petRepository.create(pet);
    return this.petRepository.save(data);
  }

  async findAll():Promise<Pet[]> {
    return this.petRepository.find();
  }

  async findOne(id: string):Promise<Pet> {
    return this.petRepository.findOne(id);
  }

  async update(id: string, updatePetInput: UpdatePetInput) {
    let data:Pet = this.petRepository.create(updatePetInput);
    data.id = id;
    return this.petRepository.save(data);
  }

  async remove(id: string) {
    let pet = this.findOne(id);
    if(pet) {
      let data = await this.petRepository.delete(id);
      if(data.affected === 1) {
        return pet;
      }
    }
    throw new NotFoundException(`Record cannot find by id ${id}`);
  }

  async getOwner(id: string) : Promise<Owner> {
    return this.ownerService.findOne(id);
  }
}
