import { Test, TestingModule } from '@nestjs/testing';
import { NoteshareController } from './noteshare.controller';
import { NoteshareService } from './noteshare.service';

describe('NoteshareController', () => {
  let controller: NoteshareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoteshareController],
      providers: [NoteshareService],
    }).compile();

    controller = module.get<NoteshareController>(NoteshareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
