import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'PROTA_SECRET_KEY_123',
    });
  }

  async validate(payload: any) {
    // Lo que retornemos aquí se inyectará en `req.user`
    return { id: payload.sub, email: payload.email };
  }
}