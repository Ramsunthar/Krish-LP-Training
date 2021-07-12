import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTION } from './app.properties';
import { OwnersModule } from './owners/owners.module';


@Module({
  imports: [OwnersModule,
  MongooseModule.forRoot(MONGO_CONNECTION),
  ],

})
export class AppModule {}
