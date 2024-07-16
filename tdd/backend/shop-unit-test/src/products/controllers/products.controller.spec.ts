import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { Product } from '../entities/product.entity';
import { ProductsService } from '../services/products.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

// npm run test:watch
describe('ProductsController', () => {
  let productController: ProductsController;

  // Creamos funciones mockeadas para ser controlada durante las pruebas
  const mockProductService = {
    findall: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn()
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: ProductsService,
          useValue: mockProductService,
        },
      ],
    }).compile();

    productController = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(productController).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const product = {
        id: Date.now(),
        name: 'Coca-Cola',
        price: 10.80,
        quantity: 10,
      } as Product;

      const products = [product]
      // En este caso usamos el findAll, por lo que mockearemos esa función y especificamos que debe devolver un user
      // En conclusión, estamos aplicando las capacidades de jest para espiar o mockear el metodo findAll.
      jest.spyOn(mockProductService, 'findall').mockReturnValue(products);

      // Obtenemos el resultado de la funcion findAll()
      const result = await productController.findAll();
      // Estas funciones las podemos usar utilizando el jest.spyOn
      // Esperamos que los resultados sean los mismos
      expect(result).toEqual(products)
      // Esperamos que el método se llame mas de una vez
      expect(mockProductService.findall).toHaveBeenCalled()
    })
  });

  describe('findOne', () => {
    it('should find a user by id', async () => {
      const product = {
        id: Date.now(),
        name: 'Coca-Cola',
        price: 10.80,
        quantity: 10,
      } as Product;

      const id = '1';
      jest.spyOn(mockProductService, 'findOne').mockReturnValue(product)

      const result = await productController.findOne(+id)

      expect(result).toEqual(product)
      expect(mockProductService.findOne).toHaveBeenCalled()
      expect(mockProductService.findOne).toHaveBeenCalledWith(+id)
    })
  })

  describe('create', () => {
    it('should create a new user', async () => {
      const createProductDto = {
        name: 'Coca-Cola',
        price: 10.30,
        quantity: 10
      } as CreateProductDto;

      const product = {
        id: 1,
        name: 'Coca-Cola',
        price: 10.30,
        quantity: 10
      } as Product;

      jest.spyOn(mockProductService, 'create').mockReturnValue(product)

      const result = await productController.create(createProductDto)

      expect(mockProductService.create).toHaveBeenCalled();
      expect(mockProductService.create).toHaveBeenCalledWith(createProductDto)
      expect(result).toEqual(product)
    })
  })

  describe('update', () => {
    it('should find a user by id and update', async () => {

      const updateUserDto = {
        name: 'Fanta',
        price: 3.99,
        quantity: 12,
      } as UpdateProductDto;

      const product = {
        id: 1,
        name: 'Fanta',
        price: 3.99,
        quantity: 12
      } as Product;

      const id = '1';

      jest.spyOn(mockProductService, 'update').mockReturnValue(product);

      const result = await productController.update(+id, product)

      expect(result).toEqual(product);
      expect(mockProductService.update).toHaveBeenCalled()
      expect(mockProductService.update).toHaveBeenCalledWith(+id,)
    })
  })

  describe('remove', () => {
    it('remove => should find a user by a given id and remove', async () => {
      const product = {
        id: 1,
        name: 'Fanta',
        price: 3.99,
        quantity: 12
      } as Product;

      const id = '1';

      jest.spyOn(mockProductService, 'remove').mockReturnValue(product)

      const result = await productController.remove(+id);

      expect(result).toEqual(product);
      expect(mockProductService.remove).toHaveBeenCalled();
      expect(mockProductService.remove).toHaveBeenCalledWith(+id)
    })
  })

});
