import { Injectable } from '@nestjs/common';
import { PetCreateDto } from '../dto/PetCreate.dto';
import { PetUpdateDto } from '../dto/PetUpdate.dto';
import { PetRepository } from '../repository/Pet.repository';
import { Pet } from '../schema/Pet.schema';

@Injectable()
export class PetsService {
    constructor(private petRepository: PetRepository) {}

    async findAll() : Promise <Pet[]> {
        return await this.petRepository.findAll();
    }

    async findById(id:string) : Promise<Pet> {
        return await this.petRepository.findById(id);
    }

    async createPet(PetCreateDto: PetCreateDto) : Promise<Pet> {
        return await this.petRepository.create(PetCreateDto);
    }

    async updatePet(id: string, PetUpdateDto: PetUpdateDto): Promise<Pet> {
        return await this.petRepository.update(id,PetUpdateDto);
    }

    async deletePet(id: string): Promise<Pet> {
        return await this.petRepository.delete(id);
    }
}
