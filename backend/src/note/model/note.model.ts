import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Usuario } from '../../usuario/model/usuario.model'; 
import { Label } from './label.model';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true }) 
  title: string;

  @Column({ type: 'text', nullable: true }) 
  content: string;

  @Column({ nullable: true })
  color: string;

  @Column({ default: true })
  activo: boolean;

  @Column({ default: false })
  is_pinned: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @ManyToMany(() => Label, (label) => label.notes)
  @JoinTable({ name: 'note_labels' })
  labels: Label[];
}