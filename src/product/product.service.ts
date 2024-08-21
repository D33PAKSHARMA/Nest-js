import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schema/ProductSchema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}
    async getAllProducts(): Promise<Product[]>{
        const products = await this.productModel.find()
        return products;
    }
}
