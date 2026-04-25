import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NoteshareService } from './noteshare.service';
import { CreateNoteshareDto } from './dto/create-noteshare.dto';
import { UpdateNoteshareDto } from './dto/update-noteshare.dto';

@Controller('noteshare')
export class NoteshareController {
  constructor(private readonly noteshareService: NoteshareService) {}

  @Post()
  create(@Body() createNoteshareDto: CreateNoteshareDto) {
    return this.noteshareService.create(createNoteshareDto);
  }

  @Get()
  findAll() {
    return this.noteshareService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noteshareService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteshareDto: UpdateNoteshareDto) {
    return this.noteshareService.update(+id, updateNoteshareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noteshareService.remove(+id);
  }
}
