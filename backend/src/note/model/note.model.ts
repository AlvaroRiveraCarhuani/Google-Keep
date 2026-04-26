import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, JoinColumn } from "typeorm";
import { Usuario } from "../../usuario/model/usuario.model";

@Entity('note')
export class Note {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    title: string;

    @Column({ type: 'text', nullable: false })
    content: string;

    @Column({ type: 'boolean', default: true })
    activo: boolean;

    // Relación con Usuario
    @ManyToOne(() => Usuario, { nullable: false })
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}