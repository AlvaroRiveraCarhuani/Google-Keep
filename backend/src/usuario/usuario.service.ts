import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './model/usuario.model';
import { CreateUsuarioDto } from './dto/usuario.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Omit<Usuario, 'password'>> {
    const existe = await this.usuarioRepository.findOne({ where: { email: createUsuarioDto.email } });
    if (existe) {
        throw new ConflictException('El email ya está registrado');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(createUsuarioDto.password, salt);

    const newUsuario = this.usuarioRepository.create({
        ...createUsuarioDto,
        password: hashedPassword
    });

    const savedUsuario = await this.usuarioRepository.save(newUsuario);
    
    // Retornamos el usuario pero le quitamos el password por seguridad
    const { password, ...result } = savedUsuario;
    return result;
  }

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find({ select: ['id', 'name', 'email', 'created_at'] }); 
  }
  async findByEmailForLogin(email: string): Promise<Usuario> {
    return await this.usuarioRepository.findOne({ where: { email } });
  }
}