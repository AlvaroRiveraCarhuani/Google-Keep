import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { CreateNoteDto } from "src/note/dto/note.dto";
import { CreateUsuarioDto } from "src/usuario/dto/usuario.dto";

export class NoteshareDto {
    @IsNumber()
    @IsOptional()
    id?: number;

    @IsNumber()
    @IsNotEmpty()
    role: number;
    
    @IsNotEmpty()
    note: CreateNoteDto;

    @IsNotEmpty()
    usuario: CreateUsuarioDto;
}