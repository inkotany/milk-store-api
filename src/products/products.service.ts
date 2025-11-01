import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  findAll() {
    const products = this.productRepository.find();
    return products;
  }

  async findOne(id: string) {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  findByName(name: string) {
    const product = this.productRepository.findOneBy({ name });
    if (!product) {
      throw new NotFoundException(`${name} not found, create one!`);
    }
    return product;
  }

  async createProduct(createProductDto: CreateProductDto) {
    let product = await this.findByName(createProductDto.name);
    if (product) {
      throw new BadRequestException(
        `Product with name ${createProductDto.name} already exists`,
      );
    }
    product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  async deleteProduct(id: string) {
    let product = await this.findOne(id);
    return this.productRepository.remove(product);
  }

  async updateProduct(id: string, updateProductDto: UpdateProductDto) {
    let product = await this.findOne(id);
    product = this.productRepository.merge(product, updateProductDto);
    return this.productRepository.save(product);
  }
}
