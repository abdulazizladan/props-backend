import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { Property } from './listing/entities/property.entity';
import { ListingModule } from './listing/listing.module';

@Module({
  imports: [ListingModule, TypeOrmModule.forRoot({
    "type": "postgres",
    "host": "localhost",
    "port": 5433,
    "username": "postgres",
    "password": "secret",
    "database": "props",
    "synchronize": true,
    "dropSchema": false,
    "keepConnectionAlive": true,
    autoLoadEntities: true,
    "logging": true,
    entities: [Property]
  })],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
