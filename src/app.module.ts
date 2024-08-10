import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/inventory-service'),
    InventoryModule,
    HttpModule, // Add HttpModule for inter-service communication
  ],
})
export class AppModule {}
