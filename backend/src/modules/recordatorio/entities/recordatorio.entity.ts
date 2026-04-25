import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Note } from '../../note/entities/note.entity';

@Entity('Recordatorio')
export class Recordatorio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  note_id: number;

  @Column({ default: true })
  Activo: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Note, (note) => note.recordatorios, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'note_id' })
  note: Note;
}