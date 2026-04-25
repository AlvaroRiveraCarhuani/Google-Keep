import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Recordatorio } from '../../recordatorio/entities/recordatorio.entity';
import { NoteShare } from '../../noteshare/entities/noteshare.entity';
import { Attachment } from '../../attachment/entities/attachment.entity';

@Entity('Note')
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column('text')
  content: string;

  @Column({ default: true })
  Activo: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Recordatorio, (recordatorio) => recordatorio.note)
  recordatorios: Recordatorio[];

  @OneToMany(() => NoteShare, (noteShare) => noteShare.note)
  shares: NoteShare[];

  @OneToMany(() => Attachment, (attachment) => attachment.note)
  attachments: Attachment[];
}