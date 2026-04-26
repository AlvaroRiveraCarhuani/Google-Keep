import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { Note } from './model/note.model';
import { Label } from './model/label.model'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Note, Label]) 
  ],
  controllers: [NoteController],
  providers: [NoteService],
  exports: [NoteService],
})
export class NoteModule {}