import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Note } from './note.model';
import { Usuario } from '../../usuario/model/usuario.model';

@Entity()
export class Label {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @ManyToMany(() => Note, (note) => note.labels)
  notes: Note[];
}