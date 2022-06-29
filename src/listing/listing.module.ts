import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyController } from './controllers/property/property.controller';
import { Property } from './entities/property.entity';
import { PropertyService } from './services/property/property.service';

@Module({
  imports: [TypeOrmModule.forFeature([Property]), Property],
  controllers: [PropertyController],
  providers: [PropertyService, Property]
})
export class ListingModule {}
