import { Document } from 'mongoose';
import { ProfileTypes } from 'src/entities/enums';

export interface IAccount extends Document {
  readonly id: string;
  readonly name: string;
  readonly username: string;
  readonly password: string;
  readonly phone: string;
  readonly document: string;
  readonly studentIds: string[];
  readonly profile: ProfileTypes;
}
