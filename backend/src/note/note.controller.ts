import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto, UpdateNoteDto } from './dto/note.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Notes')
@Controller('notes')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva nota' })
  @ApiResponse({ status: 201, description: 'Nota creada con éxito.' })
  create(@Body() createNoteDto: CreateNoteDto) {
    return this.noteService.create(createNoteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las notas activas' })
  findAll() {
    return this.noteService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una nota por ID' })
  findOne(@Param('id') id: string) {
    return this.noteService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una nota' })
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.noteService.update(+id, updateNoteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Borrado lógico de una nota (Papelera)' })
  remove(@Param('id') id: string) {
    return this.noteService.remove(+id);
  }
}