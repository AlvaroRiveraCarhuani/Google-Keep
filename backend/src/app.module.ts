import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import ormConfig from './config/orm.config';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { NoteModule } from './note/note.module';
import { Usuario } from './usuario/model/usuario.model';
import { Noteshare } from './noteshare/model/noteshare.model';
import { Note } from './note/model/note.model';
import { Attachment } from './attachment/model/attachment.model';
import { Label } from './note/model/label.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ormConfig],
      expandVariables: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: ormConfig
    }), 
    AuthModule,
    UsuarioModule,
    NoteModule,
    TypeOrmModule.forFeature([Usuario, Noteshare, Note, Attachment, Label])
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }