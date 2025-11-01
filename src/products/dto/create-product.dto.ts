import {
  IsString,
  MinLength,
  MaxLength,
  IsNumber,
  IsPositive,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(2)
  @MaxLength(200)
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsString()
  @MinLength(10)
  description: string;
}
