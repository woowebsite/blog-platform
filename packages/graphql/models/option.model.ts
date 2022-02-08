import { Table, Column, Model } from 'sequelize-typescript';

@Table({ timestamps: false })
export class Option extends Model<Option> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @Column
  value: string;

  @Column
  status: string;
}
