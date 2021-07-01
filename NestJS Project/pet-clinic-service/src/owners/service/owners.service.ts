import { Injectable } from '@nestjs/common';
import { Owner } from 'src/owners/schema/Owner.schema';
import { OwnerCreateDto } from '../dto/OwnerCreate.dto';
import { OwnerUpdateDto } from '../dto/OwnerUpdate.dto';
import { OwnerRepository } from '../repository/Owner.repository';

@Injectable()
export class OwnersService {

    constructor(private ownerRepository: OwnerRepository) {}

    async findAll() : Promise <Owner[]> {
        return await this.ownerRepository.findAll();
    }

    async findById(id:string) : Promise<Owner> {
        return await this.ownerRepository.findById(id);
    }

    async createOwner(ownerCreateDto: OwnerCreateDto) : Promise<Owner> {
        return await this.ownerRepository.create(ownerCreateDto);
    }

    async updateOwner(id: string, ownerUpdateDto: OwnerUpdateDto): Promise<Owner> {
        return await this.ownerRepository.update(id,ownerUpdateDto);
    }

    async deleteOwner(id: string): Promise<Owner> {
        return await this.ownerRepository.delete(id);
    }
}
