import { Test, TestingModule } from '@nestjs/testing';
import { contactController } from './contact.controller';

describe('contactController', () => {
  let controller: contactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [contactController],
    }).compile();

    controller = module.get<contactController>(contactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
