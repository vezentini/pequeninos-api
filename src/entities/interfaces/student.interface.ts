import { GenderTypes } from '../enums';

export interface IStudent extends Document {
  readonly id: string;
  readonly name: string;
  readonly gender: GenderTypes;
  readonly classId: string;
}
