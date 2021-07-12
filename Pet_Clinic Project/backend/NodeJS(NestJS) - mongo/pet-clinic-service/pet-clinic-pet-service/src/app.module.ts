import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTION } from './pets/app.properties';
import { PetsModule } from './pets/pets.module';


@Module({
  imports: [PetsModule, MongooseModule.forRoot(MONGO_CONNECTION)],
})
export class AppModule {}
