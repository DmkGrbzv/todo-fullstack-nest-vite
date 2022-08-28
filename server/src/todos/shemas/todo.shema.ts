import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop()
  text: string;
  @Prop()
  completed: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
