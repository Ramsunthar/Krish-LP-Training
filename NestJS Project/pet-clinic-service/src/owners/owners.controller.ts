import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { Owner } from 'src/owners/schema/Owner.schema';
import { OwnerCreateDto } from './dto/OwnerCreate.dto';
import { OwnerUpdateDto } from './dto/OwnerUpdate.dto';
import { OwnerPhoneNumberValidationPipe } from './owner-phoneNumber.pipe';
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
        return await this.ownersService.findById(id).catch(err => {throw new NotFoundException(`${id} is not found`)})
    }

    @Post()
    @UsePipes(ValidationPipe)
    @UsePipes(new OwnerPhoneNumberValidationPipe())
    async createOwner(@Body() ownerCreateDto: OwnerCreateDto) : Promise<Owner> {
        return await this.ownersService.createOwner(ownerCreateDto);
    }

    @Put('/:id')
    async updateOwner(@Param('id') id: string,@Body() ownerUpdateDto: OwnerUpdateDto) : Promise<Owner> {
        return await this.ownersService.updateOwner(id,ownerUpdateDto).catch(err => {throw new NotFoundException(`${id} is not found`)})
    }

    @Delete('/:id')
    async deleteOwner(@Param('id') id: string) {
        return await this.ownersService.deleteOwner(id).catch(err => {throw new NotFoundException(`${id} is not found`)})
    }
}
