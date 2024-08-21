import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({timestamps: true})
export class Product {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  discountPercentage: number;

  @Prop()
  rating: number;

  @Prop()
  stock: number;

  @Prop()
  brand: string;

  @Prop()
  category: string;

  @Prop()
  thumbnail: string;

  @Prop([String])
  images: string[];

  @Prop([String])
  colors: string[];

  @Prop([String])
  sizes: string[];

  @Prop([String])
  highlights: string[];

  @Prop({ default: false })
  deleted: boolean;

  @Prop()
  createdAt: Date;

  @Prop()
  discountPrice: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
