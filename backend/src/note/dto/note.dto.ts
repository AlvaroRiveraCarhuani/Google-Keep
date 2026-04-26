import { IsOptional, IsString, MaxLength, IsBoolean } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateNoteDto {
    @IsOptional()
    @IsString()
    @MaxLength(255)
    title?: string;

    @IsOptional()
    @IsString()
    content?: string;

    @IsOptional()
    @IsString()
    color?: string;

    @IsOptional()
    @IsBoolean()
    is_pinned?: boolean;
}

export class UpdateNoteDto extends PartialType(CreateNoteDto) {
    @IsOptional()
    @IsBoolean()
    activo?: boolean;
}