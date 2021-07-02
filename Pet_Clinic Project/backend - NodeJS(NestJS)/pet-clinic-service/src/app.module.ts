import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTION } from './app.properties';
import { OwnersModule } from './owners/owners.module';
import { PetsModule } from './pets/pets.module';


@Module({
  imports: [OwnersModule,
  MongooseModule.forRoot(MONGO_CONNECTION),
  PetsModule],

})
export class AppModule {}
