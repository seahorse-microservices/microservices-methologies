import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ProductsService', () => {


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ ProductsService,],
    }).compile();
  });

});
