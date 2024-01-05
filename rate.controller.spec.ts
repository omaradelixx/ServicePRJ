import { Test, TestingModule } from '@nestjs/testing';
import { rateController } from './rate.controller';

describe('rateController', () => {
  let controller: rateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [rateController],
    }).compile();

    controller = module.get<rateController>(rateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
