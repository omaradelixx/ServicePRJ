import { Test, TestingModule } from '@nestjs/testing';
import { drinkController } from './drink.controller';

describe('DrinkController', () => {
  let controller: drinkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [drinkController],
    }).compile();

    controller = module.get<drinkController>(drinkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
