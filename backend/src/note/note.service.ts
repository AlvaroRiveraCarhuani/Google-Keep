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

  async create(createNoteDto: CreateNoteDto, usuarioId: number): Promise<Note> {
    const newNote = this.noteRepository.create({
      ...createNoteDto,
      usuario: { id: usuarioId } as any,
      activo: true
    });
    return await this.noteRepository.save(newNote);
  }

  async findAll(usuarioId: number): Promise<Note[]> {
    return await this.noteRepository.find({
      where: { usuario: { id: usuarioId }, activo: true },
      order: { is_pinned: 'DESC', created_at: 'DESC' }
    });
  }

  async findOne(id: number, usuarioId: number): Promise<Note> {
    const note = await this.noteRepository.findOne({
      where: { id, usuario: { id: usuarioId }, activo: true }
    });
    if (!note) throw new NotFoundException('Nota no encontrada o no tienes permiso');
    return note;
  }

  async update(id: number, updateNoteDto: UpdateNoteDto, usuarioId: number): Promise<Note> {
    const note = await this.findOne(id, usuarioId);
    Object.assign(note, updateNoteDto);
    return await this.noteRepository.save(note);
  }

  async remove(id: number, usuarioId: number): Promise<void> {
    const note = await this.findOne(id, usuarioId);
    note.activo = false;
    await this.noteRepository.save(note);
  }

  async findTrash(usuarioId: number): Promise<Note[]> {
    return await this.noteRepository.find({
      where: { usuario: { id: usuarioId }, activo: false },
      order: { updated_at: 'DESC' }
    });
  }

  async restore(id: number, usuarioId: number): Promise<Note> {
    const note = await this.noteRepository.findOne({
      where: { id, usuario: { id: usuarioId }, activo: false }
    });
    if (!note) throw new NotFoundException('Nota no encontrada en papelera');
    note.activo = true;
    return await this.noteRepository.save(note);
  }

  async hardDelete(id: number, usuarioId: number): Promise<void> {
    const note = await this.noteRepository.findOne({
      where: { id, usuario: { id: usuarioId }, activo: false }
    });
    if (!note) throw new NotFoundException('Nota no encontrada');
    await this.noteRepository.remove(note); 
  }
}