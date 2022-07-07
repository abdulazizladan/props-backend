import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyController } from './controllers/property/property.controller';
import { Layout } from './entities/layout.entity';
import { Property } from './entities/property.entity';
import { Rooms } from './entities/rooms.entity';
import { PropertyService } from './services/property/property.service';

@Module({
  imports: [TypeOrmModule.forFeature([Property, Layout, Rooms]), Property],
  controllers: [PropertyController],
  providers: [PropertyService, Property]
})
export class ListingModule {}
