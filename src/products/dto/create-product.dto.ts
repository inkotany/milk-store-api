import { Category } from '../enums/category.enum';
import { IsEnum, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsEnum(Category)
  category: Category;

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;
}
