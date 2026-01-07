import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Category } from './models/category.model';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  getAllCategories(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }
}
