import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto, UpdateNoteDto } from './dto/note.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('notes')
@UseGuards(JwtAuthGuard)
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  create(@Body() createNoteDto: CreateNoteDto, @Request() req) {
    return this.noteService.create(createNoteDto, req.user.id);
  }

  @Get()
  findAll(@Request() req) {
    return this.noteService.findAll(req.user.id);
  }

  @Get('trash')
  findTrash(@Request() req) {
    return this.noteService.findTrash(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    return this.noteService.findOne(+id, req.user.id);
  }

  @Patch(':id/restore')
  restore(@Param('id') id: string, @Request() req) {
    return this.noteService.restore(+id, req.user.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto, @Request() req) {
    return this.noteService.update(+id, updateNoteDto, req.user.id);
  }

  @Delete(':id/permanent')
  hardDelete(@Param('id') id: string, @Request() req) {
    return this.noteService.hardDelete(+id, req.user.id);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.noteService.remove(+id, req.user.id);
  }
}