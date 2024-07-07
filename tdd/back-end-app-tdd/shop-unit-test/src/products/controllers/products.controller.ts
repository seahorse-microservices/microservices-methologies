import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  // @Get('findall')
  findAll(): Promise<any> {
    return null
  }
  // @GET(id)
  findOne(id: number): Promise<any> {
    
    return null
  }

  // @POST()
  create(product: CreateProductDto): Promise<any> {
    return null
  }


  update(id: number, product: UpdateProductDto): Promise<any> {
    return null
  }

  remove(id: number): Promise<any> {
    return null
  }
}
