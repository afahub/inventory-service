import { Body, Controller, Get, Post } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { Inventory } from './schemas/inventory.schema';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  async create(
    @Body() body: { productId: string; quantity: number },
  ): Promise<Inventory> {
    return this.inventoryService.create(body.productId, body.quantity);
  }

  @Get()
  async findAll(): Promise<Inventory[]> {
    return this.inventoryService.findAll();
  }

  @Get('product-details')
  async getProductDetails(@Body() body: { productId: string }) {
    return this.inventoryService.getProductDetails(body.productId);
  }
}
