import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  findAll() {
    return 'The list of products';
  }

  findOne(id: string) {
    return `Details of product with ID: ${id}`;
  }

  createProduct(createProductDto: CreateProductDto) {
    return `Product created with name: ${createProductDto.name}`;
  }
}
