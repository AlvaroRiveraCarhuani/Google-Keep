import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './model/note.model';
import { CreateNoteDto, UpdateNoteDto } from './dto/note.dto';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private noteRepository: Repository<Note>,
  ) {}

  async create(createNoteDto: CreateNoteDto): Promise<Note> {
    const { usuarioId, ...noteData } = createNoteDto;
    const newNote = this.noteRepository.create({
        ...noteData,
        usuario: { id: usuarioId } as any
    });
    return await this.noteRepository.save(newNote);
}

  async findAll(): Promise<Note[]> {
    return await this.noteRepository.find({ where: { activo: true }, order: { created_at: 'DESC' } });
  }

  async findOne(id: number): Promise<Note> {
    const note = await this.noteRepository.findOne({ where: { id, activo: true } });
    if (!note) {
      throw new NotFoundException(`Nota con ID ${id} no encontrada`);
    }
    return note;
  }

  async update(id: number, updateNoteDto: UpdateNoteDto): Promise<Note> {
    const note = await this.findOne(id);
    Object.assign(note, updateNoteDto);
    return await this.noteRepository.save(note);
  }

  async remove(id: number): Promise<void> {
    const note = await this.findOne(id);
    // Borrado lógico cambiando 'activo' a false
    note.activo = false;
    await this.noteRepository.save(note);
  }
}