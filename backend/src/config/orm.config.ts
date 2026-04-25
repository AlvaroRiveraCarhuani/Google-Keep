import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Note } from "src/note/model/note.model";
import { Noteshare } from "src/noteshare/model/noteshare.model";
import { Usuario } from "src/usuario/model/usuario.model";
import { Attachment } from "src/attachment/model/attachment.model";

export default registerAs(
    'orm.config',
    (): TypeOrmModuleOptions => ({
        type: 'postgres',
        host: process.env.DB_HOST || 'db',
        port: Number(process.env.DB_PORT) || 5432,
        username: process.env.DB_USER || 'user_admin',
        password: process.env.DB_PASSWORD || 'password123',
        database: process.env.DB_NAME || 'google_keep_db',
        entities: [Usuario, Noteshare, Note, Attachment],
        synchronize: false,
    }),
);