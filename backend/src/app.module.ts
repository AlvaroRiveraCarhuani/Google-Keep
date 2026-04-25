import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { NoteModule } from './modules/note/note.module';
import { NoteshareModule } from './modules/noteshare/noteshare.module';
import { AttachmentModule } from './modules/attachment/attachment.module';
import { RecordatorioModule } from './modules/recordatorio/recordatorio.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: false,
      }),
    }),
    
    UsuarioModule,
    NoteModule,
    NoteshareModule,
    AttachmentModule,
    RecordatorioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}