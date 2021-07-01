import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetsController } from './pets.controller';
import { PetRepository } from './repository/Pet.repository';
import { Pet, PetSchema } from './schema/Pet.schema';
import { PetsService } from './service/pets.service';

@Module({
  imports: [MongooseModule.forFeature([{name: Pet.name, schema: PetSchema}])],
  controllers: [PetsController],
  providers: [PetsService, PetRepository]
})
export class PetsModule {}
