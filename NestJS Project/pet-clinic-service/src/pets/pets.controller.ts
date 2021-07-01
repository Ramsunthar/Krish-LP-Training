import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
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
    @UsePipes(ValidationPipe)
    async createPet(@Body() petCreateDto: PetCreateDto) : Promise<Pet> {
        return await this.petsService.createPet(petCreateDto);
    }

    @Put('/:id')
    async updatePet(@Param('id') id: string,@Body() PetUpdateDto: PetUpdateDto) : Promise<Pet> {
        return await this.petsService.updatePet(id,PetUpdateDto);
    }

    @Delete('/:id')
    @HttpCode(204)
    async deletePet(@Param('id') id: string): Promise<Pet> {
        return await this.petsService.deletePet(id);
    }

}
