import { Module } from '@nestjs/common';
import { NoteshareService } from './noteshare.service';
import { NoteshareController } from './noteshare.controller';

@Module({
  controllers: [NoteshareController],
  providers: [NoteshareService],
})
export class NoteshareModule {}
