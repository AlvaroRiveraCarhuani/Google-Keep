import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/usuario.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService
  ) {}

  async login(email: string, pass: string) {
    const user = await this.usuarioService.findByEmailForLogin(email);
    
    if (!user) {
      this.logger.error(`Falló login: ${email} no encontrado`);
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      this.logger.error(`Falló login: Password incorrecto para ${email}`);
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    const payload = { sub: user.id, email: user.email, id: user.id };
    
    return {
      access_token: this.jwtService.sign(payload),
      usuario: { id: user.id, name: user.name, email: user.email }
    };
  }
}