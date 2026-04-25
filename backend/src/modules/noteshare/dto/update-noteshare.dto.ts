import { PartialType } from '@nestjs/mapped-types';
import { CreateNoteshareDto } from './create-noteshare.dto';

export class UpdateNoteshareDto extends PartialType(CreateNoteshareDto) {}
