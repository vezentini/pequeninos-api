import { Document } from 'mongoose';

export interface IHistoric extends Document {
  readonly id: string;
  readonly studentId: string;
  readonly medications: string[];
}
