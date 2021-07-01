import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PetCreateDto } from './dto/PetCreate.dto';
import { PetUpdateDto } from './dto/PetUpdate.dto';
import { Pet } from './schema/Pet.schema';
import { PetsService } from './service/pets.service';

@Controller('pets')
export class PetsController {
    constructor(private petsService: PetsService){}

    @Get()
    async findAll() : Promise<Pet[]> {
        return await this.petsService.findAll();
    }

    @Get('/:id')
    async findOne(@Param('id') id: string) : Promise<Pet> {
        return await this.petsService.findById(id);
    }

    @Post()
    async createPet(@Body() PetCreateDto: PetCreateDto) : Promise<Pet> {
        return await this.petsService.createPet(PetCreateDto);
    }

    @Put('/:id')
    async updatePet(@Param('id') id: string,@Body() PetUpdateDto: PetUpdateDto) : Promise<Pet> {
        return await this.petsService.updatePet(id,PetUpdateDto);
    }

    @Delete('/:id')
    async deletePet(@Param('id') id: string): Promise<Pet> {
        return await this.petsService.deletePet(id);
    }

}
