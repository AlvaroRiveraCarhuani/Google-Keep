import { Test, TestingModule } from '@nestjs/testing';
import { NoteshareService } from './noteshare.service';

describe('NoteshareService', () => {
  let service: NoteshareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoteshareService],
    }).compile();

    service = module.get<NoteshareService>(NoteshareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
