import * as mongoose from 'mongoose';
import { GenderTypes } from 'src/entities/enums';

export const StudentSchema = new mongoose.Schema({
  id: String,
  name: String,
  gender: { type: String, enum: [GenderTypes.MALE, GenderTypes.FEMALE] },
  classId: String,
});
