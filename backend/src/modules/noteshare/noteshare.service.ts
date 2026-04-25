import { Injectable } from '@nestjs/common';
import { CreateNoteshareDto } from './dto/create-noteshare.dto';
import { UpdateNoteshareDto } from './dto/update-noteshare.dto';

@Injectable()
export class NoteshareService {
  create(createNoteshareDto: CreateNoteshareDto) {
    return 'This action adds a new noteshare';
  }

  findAll() {
    return `This action returns all noteshare`;
  }

  findOne(id: number) {
    return `This action returns a #${id} noteshare`;
  }

  update(id: number, updateNoteshareDto: UpdateNoteshareDto) {
    return `This action updates a #${id} noteshare`;
  }

  remove(id: number) {
    return `This action removes a #${id} noteshare`;
  }
}
