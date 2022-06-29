import { Module } from '@nestjs/common';
import { PropertyController } from './controllers/property/property.controller';
import { PropertyService } from './services/property/property.service';

@Module({
  controllers: [PropertyController],
  providers: [PropertyService]
})
export class ListingModule {}
