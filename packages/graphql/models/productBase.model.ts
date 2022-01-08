import {
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
  BelongsToMany,
} from 'sequelize-typescript';
import { User } from './user.model';
import { Category } from './category.model';
import { Image } from './image.model';
import { ProductBaseImage } from './productbaseimage.model';

@Table({ timestamps: true })
export class ProductBase extends Model<ProductBase> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  title: string;

  @Column
  description: string;

  @Column
  status: string;

  @Column
  primaryImageUrl: string;

  @Column
  visibility: string;

  @Column
  publishDate: Date;

  @Column
  type: string;

  // Reference ================================

  // images
  @BelongsToMany(() => ProductBaseImage, () => Image)
  images: ProductBaseImage[];

  // category
  @ForeignKey(() => Category)
  @Column
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;

  // user
  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
