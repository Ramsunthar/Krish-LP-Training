import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Owner, OwnerSchema } from 'src/owners/schema/Owner.schema';
import { OwnersController } from './owners.controller';
import { OwnerRepository } from './repository/Owner.repository';
import { OwnersService } from './service/owners.service';

@Module({
  imports: [MongooseModule.forFeature([{name: Owner.name, schema: OwnerSchema}])],
  controllers: [OwnersController],
  providers: [OwnersService, OwnerRepository]
})
export class OwnersModule {}
