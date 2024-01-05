import { Test, TestingModule } from '@nestjs/testing';
import { contactService } from './contact.service';

describe('ContactService', () => {
  let service: contactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [contactService],
    }).compile();

    service = module.get<contactService>(contactService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
