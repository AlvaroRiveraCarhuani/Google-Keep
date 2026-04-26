import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateNoteDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNotEmpty()
    @IsInt()
    usuarioId: number;
}

export class UpdateNoteDto extends PartialType(CreateNoteDto) {
    @IsOptional()
    activo?: boolean;
}