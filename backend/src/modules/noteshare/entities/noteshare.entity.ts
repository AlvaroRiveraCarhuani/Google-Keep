import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Unique } from 'typeorm';
import { Note } from '../../note/entities/note.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity('Note_Share')
@Unique(['note', 'usuario']) 
export class NoteShare {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  note_id: number;

  @Column()
  usuario_id: number;

  @Column({ type: 'integer' }) // 1: Owner, 2: Editor, 3: Reader
  role: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Note, (note) => note.shares, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'note_id' })
  note: Note;

  @ManyToOne(() => Usuario, (usuario) => usuario.shared_notes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;
}