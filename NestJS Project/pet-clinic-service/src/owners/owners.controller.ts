import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Owner } from 'src/owners/schemas/Owner.schema';
import { OwnerCreateDto } from './dto/OwnerCreate.dto';
import { OwnerUpdateDto } from './dto/OwnerUpdate.dto';
import { OwnersService } from './service/owners.service';

@Controller('owners')
export class OwnersController {
    constructor (private ownersService: OwnersService) {}

    @Get()
    async findAll() : Promise<Owner[]> {
        return await this.ownersService.findAll();
    }

    @Get('/:id')
    async findOne(@Param('id') id: string) : Promise<Owner> {
        return await this.ownersService.findById(id);
    }

    @Post()
    async createOwner(@Body() ownerCreateDto: OwnerCreateDto) : Promise<Owner> {
        return await this.ownersService.createOwner(ownerCreateDto);
    }

    @Put('/:id')
    async updateOwner(@Param('id') id: string,@Body() ownerUpdateDto: OwnerUpdateDto) : Promise<Owner> {
        return await this.ownersService.updateOwner(id,ownerUpdateDto);
    }

    @Delete('/:id')
    async deleteOwner(@Param('id') id: string): Promise<Owner> {
        return await this.ownersService.deleteOwner(id);
    }
}
