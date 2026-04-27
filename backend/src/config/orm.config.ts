import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Note } from "../note/model/note.model";
import { Noteshare } from "../noteshare/model/noteshare.model";
import { Usuario } from "../usuario/model/usuario.model";
import { Attachment } from "../attachment/model/attachment.model";
import { Label } from "../note/model/label.model"; 

export default registerAs(
    'orm.config',
    (): TypeOrmModuleOptions => ({
        type: 'postgres',
        host: process.env.DB_HOST || 'db',
        port: Number(process.env.DB_PORT) || 5432,
        username: process.env.DB_USER || 'user_admin',
        password: process.env.DB_PASSWORD || 'password123',
        database: process.env.DB_NAME || 'google_keep_db',
        entities: [Usuario, Noteshare, Note, Attachment, Label], 
        synchronize: true,
    }),
);