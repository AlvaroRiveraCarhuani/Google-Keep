import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Note } from '../../note/entities/note.entity';

@Entity('Attachment')
export class Attachment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  note_id: number;

  @Column({ length: 255 })
  file_name: string;

  @Column({ length: 100 })
  file_type: string;

  @Column({ type: 'integer', nullable: true })
  file_size: number;

  @Column({ type: 'bytea' })
  file_data: Buffer;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Note, (note) => note.attachments, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'note_id' })
  note: Note;
}