import { Test, TestingModule } from '@nestjs/testing';
import { rateService } from './rate.service';

describe('rateService', () => {
  let service: rateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [rateService],
    }).compile();

    service = module.get<rateService>(rateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
