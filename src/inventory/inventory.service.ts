import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { firstValueFrom } from 'rxjs';
import { Inventory } from './schemas/inventory.schema';

@Injectable()
export class InventoryService {
  constructor(
    @InjectModel(Inventory.name) private inventoryModel: Model<Inventory>,
    private readonly httpService: HttpService,
  ) {}

  async create(productId: string, quantity: number): Promise<Inventory> {
    const inventory = new this.inventoryModel({ productId, quantity });
    return inventory.save();
  }

  async getProductDetails(productId: string) {
    const response = await firstValueFrom(
      this.httpService.get(`http://localhost:3000/products/${productId}`),
    );
    return response.data;
  }

  async findAll(): Promise<Inventory[]> {
    return this.inventoryModel.find().exec();
  }
}
